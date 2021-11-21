import routerx from "express-promise-router";
import reporteController from "../controllers/ReporteController";
import auth from "../middlewares/auth";

const router = routerx();


router.get('/filtrar1', reporteController.filtrar1);
router.post('/filtrar2', reporteController.filtrar2);


export default router;
