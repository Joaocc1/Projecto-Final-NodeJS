import { Request, Response } from "express";
import { add } from "../../services/carcolor";

export default async (request: Request, response: Response) => {
  const { name } = request.body;

  const newColor = await add(name);

  return response.json(newColor);
};
