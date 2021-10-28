//const models = require('../models');
import models from '../models';

async function getNextSequenceValue(sequenceName){
    var sequenceDocument = await models.Contador.findOneAndUpdate(
       
        { idCodigo: sequenceName }, {$inc: { sequence_value: 1 } }, {new: true }

        );
    return sequenceDocument.sequence_value;
}

export default {

    agregar: async (req, res, next) => {
        const x = "SGD_FD_21_REQ_";
        try {
            var m = await getNextSequenceValue("incidenciaid");
            req.body.codigo = x + m;
                const registro = await models.Incidencia.create(req.body);
                res.status(200).json(registro);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });

            next(error);
        }
    },
    consultarUna: async (req, res, next) => {
        try {
                const registro = await models.Incidencia.findOne({_id: req.query._id})
                .populate('usuario', {nombre: 1, apePat: 1});
                if(!registro){
                    res.status(404).send({
                        message: 'La incidencia no existe'
                    });
                }else{
                    res.status(200).json(registro);
                }
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });

            next(error);
        }
    },
    listar: async (req, res, next) => {
        try {
                const registro = await models.Incidencia.find({})
                .populate('responsable', {nombre: 1, apePat: 1}); // se hace referencia al campo 
                res.status(200).json(registro);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });

            next(error);
        }
    },
    editar: async (req, res, next) => {
        try {
                const registro = await models.Incidencia.findByIdAndUpdate({_id: req.body._id}, {codigo: req.body.codigo, responsable: req.body.responsable, tipo: req.body.tipo, fechaInicio: req.body.fechaInicio, fechaTermino: req.body.FechaTermino, descripcion: req.body.descripcion, nombreCliente: req.body.nombreCliente, prioridad: req.body.prioridad, medioAtencion: req.body.medioAtencion});
                res.status(200).json(registro);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });

            next(error);
        }
    },
    eliminar: async (req, res, next) => {
        try {
                const registro = await models.Incidencia.findByIdAndDelete({_id: req.body._id});
                res.status(200).json(registro);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });

            next(error);
        }
    }
}

