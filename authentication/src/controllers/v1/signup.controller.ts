import express, { Request, Response } from "express";
import { BASE_URL_V1 } from "../constants";

const router = express.Router();

router.post(`${BASE_URL_V1}/signup`, async (req: Request, res: Response) => {});

export { router as signupRouter };
