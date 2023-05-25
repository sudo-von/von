import express from "express";
import { config } from "./src/config/config";
import { signupRouter } from "./src/controllers/v1/signup/signup.controller";

const app = express();

/* 🔌 Middlewares. */
app.use(express.json());

/* 📡 Routers. */
app.use(signupRouter);

app.listen(config.port, () => {
  console.log(`🖥️ Listening at port: ${config.port}`);
});
