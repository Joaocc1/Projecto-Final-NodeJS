import express, { Request, Response } from "express";
import { name, version } from "../../package.json";

const router = express.Router();

router.get("/", (req: Request, res: Response) =>
  res.json({
    name,
    version,
  })
);

export default router;
