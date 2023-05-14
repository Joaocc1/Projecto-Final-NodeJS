import { Request, Response } from "express";
import { add } from "../../services/carmodel";

export default async (request: Request, response: Response) => {
  const { name } = request.body;

  const newModel = await add(name);

  return response.json(newModel);
};
