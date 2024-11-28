import express from "express";
import routes from "./routes.js"; //Importação do routes.js

const server = express(); // Json é um modelo de comunicação entre front, back e banco, baseado em objetos

server.use(express.json())
server.use("/", routes); // O use funciona para qualquer método HTTP: POST/Atualizar - PUT - DELETE - GET/Listagem - PATCH

server.listen(3333, () => {
    console.log("Meu servidor esta rodando 🚀")
});