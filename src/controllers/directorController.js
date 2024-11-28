import express from "express";
import service from "../service/directorService.js";

const route = express.Router();

// GET

route.get("/", async (request, response) => {
  const directors = await service.listDirector();

  if (users.length < 1) {
    return response.status(204).end();
  }
  return response.status(200).send({ message: directors });
});

// POST

route.post("/", async (request, response) => {
  const { name, nationality, birthDay, gender } = request.body;

  await service.createDirector(name, nationality, birthDay, gender);
  return response
    .status(201)
    .send({ message: "Diretor cadastrado com sucesso" });
});

// UPDATE

route.put("/:idDirector", async (request, response) => {
  const { name, nationality, birthDay, gender } = request.body;
  const { idDirector } = request.params;

  await service.updateDirector(gender, idDirector);
  return response
    .status(201)
    .send({ message: "Diretor atualizado com sucesso" });
});

//DELETE

route.delete("/:idDirector", async (request, response) => {
  const { idDirector } = request.params;

  await service.deleteDirector(idDirector);
  return response.status(200).send({ message: "Diretor deletado" });
});

export default route;
