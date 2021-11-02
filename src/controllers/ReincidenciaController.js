import models from '../models';

export default {

    agregar: async (req, res, next) => {
    
        try {
                var x = await models.Reincidencia.countDocuments({incidencia: req.body.incidencia});
                console.log(x);
                if(x > 0){
                    req.body.replica = x + 1;
                }
                
                const registro = await models.Reincidencia.create(req.body);
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
                const registro = await models.Reincidencia.findOne({_id: req.query._id})
                .populate('incidencia', {codigo: 1, responsable: 1});
                if(!registro){
                    res.status(404).send({
                        message: 'La reincidencia no existe'
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
                const registro = await models.Reincidencia.find({})
                .populate('incidencia', {codigo: 1, responsable: 1}); // se hace referencia al campo 
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
                const registro = await models.Reincidencia.findByIdAndUpdate({_id: req.body._id}, {replica: req.body.replica, incidencia: req.body.incidencia, fechaInicio: req.body.fechaInicio, fechaTermino: req.body.fechaTermino, descripcion: req.body.descripcion});
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
                const registro = await models.Reincidencia.findByIdAndDelete({_id: req.body._id});
                res.status(200).json(registro);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });

            next(error);
        }
    }
}

