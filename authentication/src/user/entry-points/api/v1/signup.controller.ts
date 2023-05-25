import express, { Request, Response } from "express";
import { validateBodyHandler } from "../middlewares/validate-request";
import { validateCreateUserHandler } from "./validators/create-user-validator";
import { apiConfig } from "../../../config/api-config";

const router = express.Router();

router.post(
  `${apiConfig.endpoints.v1}/signup`,
  validateCreateUserHandler,
  validateBodyHandler,
  async (req: Request, res: Response) => {
    return res.json(200);
  }
);

export { router as v1SignupRouter };
