import routerx from 'express-promise-router';
//const routerx = require('express-promise-router')
import incidenciaRouter from './incidencia';
//const incidenciaRouter = require('./incidencia');

const router = routerx();

router.use('/incidencia', incidenciaRouter);

export default router;