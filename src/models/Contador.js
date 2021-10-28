import mongoose, {Schema} from 'mongoose';

const contadorSchema = new Schema ({

    idCodigo: {type: String},
    sequence_value: {type: Number},
});

const Contador = mongoose.model('contador', contadorSchema);

export default Contador;