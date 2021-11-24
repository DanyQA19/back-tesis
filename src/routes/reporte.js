import routerx from "express-promise-router";
import reporteController from "../controllers/ReporteController";
import auth from "../middlewares/auth";

const router = routerx();


router.get('/filtrar1', auth.verifyUsuario, reporteController.filtrar1);
router.post('/filtrar2', auth.verifyUsuario, reporteController.filtrar2);


export default router;
