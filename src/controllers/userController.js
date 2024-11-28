import express, { request, response } from "express";
import service from "../service/userService.js";

const route = express.Router();

// GET

route.get("/", async (request, response) => {
  const users = await service.listUser();

  if (users.length < 1) {
    return response.status(204).end();
  }
  return response.status(200).send({ message: users });
});

// POST

route.post("/", async (request, response) => {
  const { name, email, password, typeUser } = request.body;

  await service.createUser(name, email, password, typeUser);
  return response
    .status(201)
    .send({ message: "Usuario cadastrado com sucesso" });
});

//UPADTE

route.put("/:idUser", async (request, response) => {
  const { name, email, password, typeUser } = request.body;
  const { idUser } = request.params;

  await service.updateUser(name, email, password, typeUser, idUser);
  return response
    .status(201)
    .send({ message: "Usuario atualizado com sucesso" });
});

// DELETE

route.delete("/:idUser", async (request, response) => {
  const { idUser } = request.params;

  await service.deleteUser(idUser);
  return response.status(200).send({ message: "ususario deletado" });
});

export default route;
