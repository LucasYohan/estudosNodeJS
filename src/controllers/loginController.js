import express from "express";
import db from "../service/loginService.js";
import { generatePassword, generatedToken } from "../helpers/loginActions.js";

const route = express.Router();

//FAZER LOGIN

route.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await db.login(email, password);

    const { id_usuario, nome } = users[0]

    if (users.length > 0) {
      const token = generatedToken(id_usuario, nome);
      return res.status(200).send({ message: token });
    } else {
      res.status(401).send({ message: "Login incorreto" });
    }

    console.log(users);
  } catch (err) {
    res
      .status(500)
      .send({ message: `Houve um erro no banco de dados. ${err}` });
  }
});

//RECUPERAR SENHA

route.post("/reset", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await db.checkEmail(email);

    if (user.length > 0) {
      const newPassword = generatePassword();
      await db.changePassword(email, newPassword);

      res.status(200).send({ message: `Nova senha: ${newPassword}` });
    } else res.status(404).send({ message: "Usuario nao encontrado" });
  } catch (err) {
    res.send({ message: `Houve um erro no banco de dados. ${err}` });
  }
});

export default route;
