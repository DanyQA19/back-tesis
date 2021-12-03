import routerx from "express-promise-router";
import reporteController from "../controllers/ReporteController2";
import auth from "../middlewares/auth";

const router = routerx();


router.get('/filtrar3', auth.verifyUsuario, reporteController.filtrar3);
router.post('/filtrar4', auth.verifyUsuario, reporteController.filtrar4);


export default router;
