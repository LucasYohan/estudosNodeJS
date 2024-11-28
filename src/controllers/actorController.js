import express from "express";
import service from "../service/actorService.js";

const route = express.Router();

// GET

route.get("/", async (request, response) => {
  const actors = await service.listActor();

  if (users.length < 1) {
    return response.status(204).end();
  }
  return response.status(200).send({ message: actors });
});

// POST

route.post("/", async (request, response) => {
  const { name, gender, birthDay } = request.body;

  await service.createActor(name, gender, birthDay);
  return response.status(201).send({ message: "Ator cadastrado com sucesso" });
});

// UPDATE

route.put("/:idActor", async (request, response) => {
  const { name, gender, birthDay } = request.body;
  const { idActor } = request.params;

  await service.updateActor(name, gender, birthDay, idActor);
  return response.status(201).send({ message: "Ator atualizado com sucesso" });
});

//DELETE

route.delete("/:idActor", async (request, response) => {
  const { idActor } = request.params;

  await service.deleteActor(idActor);
  return response.status(200).send({ message: "Ator deletado" });
});

export default route;
