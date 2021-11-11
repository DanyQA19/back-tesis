import models from '../models';

export default {

    enviarData: async (req, res, next) => {
        try {
                let fechaInicio = req.body.fechaInicio;
                let fechaFin = req.body.fechaFin;

                //const registro = await models.Incidencia.find({fechaTermino: {$gte:'2021-01-06T00:00:00.00Z', $lte:'2021-01-06T00:00:00.00Z'}});
                //const registro = await models.Incidencia.find({fechaTermino: {$gte: fechaInicio, $lte: fechaFin}}, {nombreCliente: 1});
              // const registro = await models.Incidencia.aggregate([{"$group" : {_id:"$nombreCliente", count:{$sum:1}}}]);
                const registro = await models.Incidencia.aggregate([
                { $match: {fechaTermino: {$gte: fechaInicio, $lte: fechaFin}} },
                { $group: {_id:"$nombreCliente", count:{$sum:1}} }
              ]); 

                res.status(200).json(registro);
        } catch (error) {
                console.log(error);
                res.status(500).send({
                message: 'Ocurrio un error'
            });

            next(error);
        }
    }
}

