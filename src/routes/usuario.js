import routerx from 'express-promise-router';
import usuarioController from '../controllers/UsuarioController';
import auth from '../middlewares/auth';

const router = routerx();

router.post('/agregar', auth.verifyAdministrador, usuarioController.agregar);
router.get('/consultarUna', auth.verifyAdministrador, usuarioController.consultarUna);
router.get('/listar', auth.verifyAdministrador, usuarioController.listar);
router.put('/editar', auth.verifyAdministrador, usuarioController.editar);
router.delete('/eliminar', auth.verifyAdministrador, usuarioController.eliminar);
router.put('/activar', auth.verifyAdministrador, usuarioController.activar);
router.put('/desactivar', auth.verifyAdministrador, usuarioController.desactivar);
router.post('/login', usuarioController.login);

export default router;
