import models from '../models';

export default {

    filtrar1: async (req, res, next) => {
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
    filtrar2: async (req, res, next) => {
        try {
                let fechaInicio = req.body.fechaInicio;
                let fechaFin = req.body.fechaTermino;
                let responsable = req.body.responsable;

                const resultado = await models.Incidencia.find({$and: [{fechaTermino: {$gte: fechaInicio, $lte: fechaFin}}, {responsable: responsable}]})
                .populate('responsable', {nombre: 1, apePat: 1}); // se hace referencia al campo 

                res.status(200).json(resultado);
            
        } catch (error) {
            console.log(error);
                res.status(500).send({
                message: 'Ocurrio un error'
            });

            next(error);
        }
    }
}

