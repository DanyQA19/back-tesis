import mongoose, { Schema } from "mongoose";

const incidenciaSchema = new Schema({
  codigo: { type: String}, // SGD_FD_21_REQ_00004
  responsable: { type: Schema.ObjectId, ref: "usuario" }, // se hace referencia al trabajador de soporte
  tipo: { type: String, required: true }, // SISTEMA DE GESTIÓN DOCUMENTAL o MÓDULO DE ATENCIÓN DE TRÁMITES
  fechaInicio: { type: Date, required: true }, // , default: Date.now
  fechaTermino: { type: Date, required: true }, // se agrega al final
  descripcion: { type: String, maxlength: 255 },
  nombreCliente: { type: String, maxlength: 30 },
  prioridad: { type: String, default: "Bajo" },
  medioAtencion: { type: String, default: "Correo electrónico" },
  createdAt: {type: Date, default: Date.now}
});

const Incidencia = mongoose.model("incidencia", incidenciaSchema);

export default Incidencia;
