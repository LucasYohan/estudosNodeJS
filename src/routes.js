import express from "express";
import userController from "./controllers/userController.js";
import genderController from "./controllers/genderController.js";
import directorController from "./controllers/directorController.js"
import actorController from "./controllers/actorController.js"
import login from "./controllers/loginController.js"
import { verifyJWT } from "./middleware/jwt.js";

const routes = express();

routes.use("/user", verifyJWT, userController);
routes.use("/gender", genderController);
routes.use("/director", directorController);
routes.use("/actor", actorController);
routes.use("/login", login);


export default routes;