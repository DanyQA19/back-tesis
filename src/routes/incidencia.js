import routerx from 'express-promise-router';
import incidenciaController from '../controllers/IncidenciaController';


const router = routerx();

router.post('/agregar', incidenciaController.agregar);
router.get('/consultarUna', incidenciaController.consultarUna);
router.get('/listar', incidenciaController.listar);
router.put('/editar', incidenciaController.editar);
router.delete('/eliminar', incidenciaController.eliminar);

export default router;
