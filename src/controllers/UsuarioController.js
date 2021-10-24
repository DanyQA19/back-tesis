import models from "../models";
import bcrypt from "bcryptjs";
import token from "../services/token";

export default {
  agregar: async (req, res, next) => {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const registro = await models.Usuario.create(req.body);
      res.status(200).json(registro);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error",
      });

      next(error);
    }
  },
  consultarUna: async (req, res, next) => {
    try {
      const registro = await models.Usuario.findOne({ _id: req.query._id });
      if (!registro) {
        res.status(404).send({
          message: "La incidencia no existe",
        });
      } else {
        res.status(200).json(registro);
      }
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error",
      });

      next(error);
    }
  },
  listar: async (req, res, next) => {
    try {
      const registro = await models.Usuario.find({});
      res.status(200).json(registro);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error",
      });

      next(error);
    }
  },
  editar: async (req, res, next) => {
    try {
      let pas = req.body.password;
      const reg0 = await models.Usuario.findOne({ _id: req.body._id });
      if (pas != reg0.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      }
      const registro = await models.Usuario.findByIdAndUpdate(
        { _id: req.body._id },
        {
          rol: req.body.rol,
          nombre: req.body.nombre,
          apePat: req.body.apePat,
          apeMat: req.body.apeMat,
          dni: req.body.dni,
          email: req.body.email,
          password: req.body.password,
        }
      );
      res.status(200).json(registro);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error",
      });

      next(error);
    }
  },
  eliminar: async (req, res, next) => {
    try {
      const registro = await models.Usuario.findByIdAndDelete({
        _id: req.body._id,
      });
      res.status(200).json(registro);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error",
      });

      next(error);
    }
  },
  activar: async (req, res, next) => {
    try {
      const registro = await models.Usuario.findByIdAndUpdate(
        { _id: req.body._id },
        { estado: 1 }
      );
      res.status(200).json(registro);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error",
      });

      next(error);
    }
  },
  desactivar: async (req, res, next) => {
    try {
      const registro = await models.Usuario.findByIdAndUpdate(
        { _id: req.body._id },
        { estado: 0 }
      );
      res.status(200).json(registro);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error",
      });

      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      let usuario = await models.Usuario.findOne({
        email: req.body.email,
        estado: 1,
      });
      if (usuario) {
        // existe usuario con email
        let match = await bcrypt.compare(req.body.password, usuario.password);
        if (match) {
          //res.json('Password correcto');
          let tokenReturn = await token.encode(
            usuario._id,
            usuario.rol,
            usuario.email
          );
          res.status(200).json({ usuario, tokenReturn });
        } else {
          res.status(404).send({
            message: "Password incorrecto",
          });
        }
      } else {
        res.status(404).send({
          message: "No existe el usuario!",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error",
      });

      next(error);
    }
  },
};
