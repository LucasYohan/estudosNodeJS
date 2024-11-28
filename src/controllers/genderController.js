import express from "express";
import service from "../service/genderService.js";

const route = express.Router();

// GET

route.get("/", async (request, response) => {
  const genders = await service.listGenders();

  if (users.length < 1) {
    return response.status(204).end();
  }
  return response.status(200).send({ message: genders });
});

// POST

route.post("/idGender", async (request, response) => {
  const { gender } = request.body;

  await service.createGender(gender);
  return response
    .status(201)
    .send({ message: "Genero cadastrado com sucesso" });
});

// UPDATE

route.put("/:idGender", async (request, response) => {
  const { gender } = request.body;
  const { idGender } = request.params;

  await service.updateUser(gender, idGender);
  return response
    .status(201)
    .send({ message: "Genero atualizado com sucesso" });
});

//DELETE

route.delete("/:idGender", async (request, response) => {
  const { idGender } = request.params;

  await service.deleteUser(idGender);
  return response.status(200).send({ message: "Genero deletado" });
});

export default route;
