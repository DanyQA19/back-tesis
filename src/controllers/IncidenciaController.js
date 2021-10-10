//const models = require('../models');
import models from '../models';

export default {

    agregar: async (req, res, next) => {
        try {
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
                const registro = await models.Incidencia.findOne({_id: req.query._id});
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
                const registro = await models.Incidencia.find({});
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
                const registro = await models.Incidencia.findByIdAndUpdate({_id: req.body._id}, {tipo: req.body.tipo, fechaInicio: req.body.fechaInicio, fechaFin: req.body.FechaFin, descripcion: req.body.descripcion, nombreCliente: req.body.nombreCliente, prioridad: req.body.prioridad, medioAtencion: req.body.medioAtencion});
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