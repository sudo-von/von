import express from "express";

const app = express();

app.use(express.json());

app.listen(config.port, () => {
  console.log(`Listening at port: ${config.port}`);
});
