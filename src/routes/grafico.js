import routerx from "express-promise-router";
import graficoController from "../controllers/GraficoController";
import auth from "../middlewares/auth";

const router = routerx();

//router.post("/agregar", auth.verifyTrabajador, graficoController.agregar);

//router.get('/listar', auth.verifyTrabajador, graficoController.listar);

router.get('/enviarData', auth.verifyUsuario, graficoController.enviarData);
router.post('/enviar', auth.verifyUsuario, graficoController.enviar);
//router.post('/enviar', graficoController.enviar);

export default router;
