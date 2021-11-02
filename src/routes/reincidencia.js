import routerx from "express-promise-router";
import reincidenciaController from "../controllers/ReincidenciaController";
import auth from "../middlewares/auth";

const router = routerx();

router.post("/agregar", auth.verifyTrabajador, reincidenciaController.agregar);
//router.post("/agregar", incidenciaController.agregar);
router.get("/consultarUna", auth.verifyTrabajador, reincidenciaController.consultarUna);
router.get('/listar', auth.verifyTrabajador, reincidenciaController.listar);
//router.get("/listar", incidenciaController.listar);
router.put("/editar", auth.verifyTrabajador, reincidenciaController.editar);
//router.put("/editar", incidenciaController.editar);
router.delete("/eliminar", auth.verifyTrabajador, reincidenciaController.eliminar);

export default router;
