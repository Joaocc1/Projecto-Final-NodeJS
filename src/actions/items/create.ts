import { Request, Response } from "express";
import { add } from "../../services/items";

export default async (request: Request, response: Response) => {
  const { name, price, description } = request.body;

  const newItem = await add(name, price, description);

  return response.json(newItem);
};
