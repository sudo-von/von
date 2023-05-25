import express, { Request, Response } from "express";
import { BASE_URL_V1 } from "../../constants";
import { validateCreateUserHandler } from "../user/entity/create-user";
import { validationResult } from "express-validator";

const router = express.Router();

const SIGNUP_ENDPOINT = `${BASE_URL_V1}/signup`;

router.post(
  SIGNUP_ENDPOINT,
  validateCreateUserHandler,
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) console.log(errors.array());

    return res.json(200);
  }
);

export { router as signupRouter };
