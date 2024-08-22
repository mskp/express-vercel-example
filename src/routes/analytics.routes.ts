import { Router } from "express";
import { GET, POST } from "../controllers/analytics.controllers.js";

const analyticsRoutes = Router();

analyticsRoutes.route("").get(GET).post(POST);

export default analyticsRoutes;
