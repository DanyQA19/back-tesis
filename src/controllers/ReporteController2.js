import models from '../models';

export default {

    filtrar3: async (req, res, next) => {
        try {
                const registro = await models.Reincidencia.find({})
                .populate('incidencia', {codigo: 1}); // se hace referencia al campo 
                res.status(200).json(registro);
        } catch (error) {
            res.status(500).send({
            message: 'Ocurrio un error'
            });

            next(error);
        }
    },
    filtrar4: async (req, res, next) => {
        try {
                let fechaInicio = req.body.fechaInicio;
                let fechaFin = req.body.fechaTermino;

                const resultado = await models.Reincidencia.find({$and: [{fechaTermino: {$gte: fechaInicio, $lte: fechaFin}}]})
                .populate('incidencia', {codigo: 1}); // se hace referencia al campo 

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

