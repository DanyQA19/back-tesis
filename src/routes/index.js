import routerx from 'express-promise-router';
//const routerx = require('express-promise-router')
import incidenciaRouter from './incidencia';
import usuarioRouter from './usuario';
//const incidenciaRouter = require('./incidencia');

const router = routerx();

router.use('/incidencia', incidenciaRouter);
router.use('/usuario', usuarioRouter);

export default router;