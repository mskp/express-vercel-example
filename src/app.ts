import express from "express";
import analyticsRoutes from "./routes/analytics.routes.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();

app.use(express.json());

app.use("/api/users", usersRoutes);
app.use("/api/analytics", analyticsRoutes);

app.listen(8000);

export default app;
