import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';

//Conexión a la base de datos MongoDB
mongoose.Promise=global.Promise;
const dbUrl = "mongodb+srv://Tesis2:fisi123456@cluster0.p2kbz.mongodb.net/db_Tesis?retryWrites=true&w=majority";
mongoose.connect(dbUrl, {
    useNewUrlParser: true
})
var db = mongoose.connection;
db.on("error", console.error.bind(console, "error al conectar bd"));
db.once("open", function () {
    console.log("bd conectada")
})

const app=express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/api', router);
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Servidor en: ' + app.get('port'));
});

