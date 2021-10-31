import tokenService from '../services/token';

export default {
    verifyUsuario: async (req, res, next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'NO token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if(response.rol == 'administrador' || response.rol == 'gerente' || response.rol == 'trabajador'){
            next();
        }else{
            return res.status(403).send({
                message: 'NO autorizado'
            });
        }
    },
    verifyAdministrador: async (req, res, next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'NO token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if(response.rol == 'administrador'){
            next();
        }else{
            return res.status(403).send({
                message: 'NO autorizado'
            });
        }
    },
    verifyGerente: async (req, res, next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'NO token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if(response.rol == 'administrador' || response.rol == 'gerente'){
            next();
        }else{
            return res.status(403).send({
                message: 'NO autorizado'
            });
        }
    },
    verifyTrabajador: async (req, res, next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'NO token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if(response.rol == 'administrador' || response.rol == 'trabajador'){
            next();
        }else{
            return res.status(403).send({
                message: 'NO autorizado'
            });
        }
    }
}