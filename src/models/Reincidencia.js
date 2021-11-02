import mongoose, { Schema } from "mongoose";

const reincidenciaSchema = new Schema({
  replica: { type: Number, default: 1}, // SGD_FD_21_REQ_00004
  incidencia: { type: Schema.ObjectId, ref: "incidencia" }, // se hace referencia al trabajador de soporte
  fechaInicio: { type: Date, required: true }, // , default: Date.now
  fechaTermino: { type: Date, required: true }, // se agrega al final
  descripcion: { type: String, maxlength: 255 },
});

const Reincidencia = mongoose.model("reincidencia", reincidenciaSchema);

export default Reincidencia;
