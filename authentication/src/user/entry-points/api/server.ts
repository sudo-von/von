import express from "express";
import { serverConfig } from "../../config/server-config";
import { v1SignupRouter } from "./v1/signup.controller";

const app = express();

/* 🔌 Middlewares. */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* 📡 Routers. */
app.use(v1SignupRouter);

app.listen(serverConfig.port, () => {
  console.log(`🖥️ Listening at port: ${serverConfig.port}`);
});
