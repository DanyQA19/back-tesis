import mongoose, {Schema} from 'mongoose';

const usuarioSchema = new Schema ({

    rol: {type: String, required: true}, // trabajador - gerente - administrador
    nombre: {type: String, required: true},   
    apePat: {type: String, required: true},
    apeMat: {type: String, required: true},
    dni: {type: String, required: true},
    email: {type: String, required: true, unique: true},                 
    password: {type: String, maxlength: 64,required: true},
    estado: {type: Number, default: 1}
});

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;