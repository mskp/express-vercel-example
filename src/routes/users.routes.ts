import { Router } from "express";
import { DELETE, PUT } from "../controllers/users.controllers.js";

const usersRoutes = Router();

usersRoutes.route("").put(PUT).delete(DELETE);

export default usersRoutes;
