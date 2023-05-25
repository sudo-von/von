import express, { Request, Response } from "express";
import { BASE_URL_V1 } from "../../constants";
import { validateCreateUserHandler } from "../user/entity/create-user";
import { validateRequestHandler } from "../../middlewares/validate-request";

const router = express.Router();

const SIGNUP_ENDPOINT = `${BASE_URL_V1}/signup`;

router.post(
  SIGNUP_ENDPOINT,
  validateCreateUserHandler,
  validateRequestHandler,
  async (req: Request, res: Response) => {
    return res.json(200);
  }
);

export { router as signupRouter };
