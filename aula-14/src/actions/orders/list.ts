import { Request, Response } from "express";
import { all } from "../../services/orders";

export default async (req: Request, res: Response) => {
  res.json(await all(req.user.id));
};
