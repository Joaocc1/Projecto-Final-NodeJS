import { Request, Response } from "express";
import { add } from "../../services/orders";

export default async (req: Request, res: Response) => {
  const { productIds } = req.body;

  const newOrder = await add(req.user.id, productIds);

  return res.json(newOrder);
};
