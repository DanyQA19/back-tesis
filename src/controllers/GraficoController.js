import models from '../models';
const _ = require("lodash"); 

export default {

    enviarData: async (req, res, next) => {
        try {
                const registro = await models.Incidencia.find({});

              let resultado = {};
              resultado = _.reduce(_.countBy(registro, 'nombreCliente'), (resultado, value, key) => {
                  resultado.push({nombreCliente: key, count: value});
                  return resultado;
              }, []);

              
                res.status(200).json(resultado);
        } catch (error) {
                console.log(error);
                res.status(500).send({
                message: 'Ocurrio un error'
            });

            next(error);
        }
    },
    enviar: async (req, res, next) => {
        try {
                let fechaInicio = req.body.fechaInicio;
                let fechaFin = req.body.fechaTermino;

                const registro = await models.Incidencia.find({fechaTermino: {$gte: fechaInicio, $lte: fechaFin}});

                let resultado = {};
                resultado = _.reduce(_.countBy(registro, 'nombreCliente'), (resultado, value, key) => {
                    resultado.push({nombreCliente: key, count: value});
                    return resultado;
                }, []);
                console.log(fechaInicio);
                console.log(fechaFin);

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

