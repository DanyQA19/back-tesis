import routerx from "express-promise-router";
import incidenciaController from "../controllers/IncidenciaController";
import auth from "../middlewares/auth";

const router = routerx();

router.post("/agregar", auth.verifyTrabajador, incidenciaController.agregar);
//router.post("/agregar", incidenciaController.agregar);
router.get("/consultarUna", auth.verifyTrabajador, incidenciaController.consultarUna);
router.get('/listar', auth.verifyTrabajador, incidenciaController.listar);
//router.get("/listar", incidenciaController.listar);
router.put("/editar", auth.verifyTrabajador, incidenciaController.editar);
//router.put("/editar", incidenciaController.editar);
router.delete("/eliminar", auth.verifyTrabajador, incidenciaController.eliminar);

export default router;
