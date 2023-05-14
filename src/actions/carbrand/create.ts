import { Request, Response } from "express";
import { add } from "../../services/carbrand";

export default async (request: Request, response: Response) => {
  const { name } = request.body;

  const newBrand = await add(name);

  return response.json(newBrand);
};
