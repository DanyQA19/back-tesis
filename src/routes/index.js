import routerx from 'express-promise-router';
//const routerx = require('express-promise-router')
import incidenciaRouter from './incidencia';
import usuarioRouter from './usuario';
import reincidenciaRouter from './reincidencia';
import graficoRouter from './grafico';
//const incidenciaRouter = require('./incidencia');

const router = routerx();

router.use('/incidencia', incidenciaRouter);
router.use('/usuario', usuarioRouter);
router.use('/reincidencia', reincidenciaRouter);
router.use('/grafico', graficoRouter);

export default router;