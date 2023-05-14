import { Request, Response } from "express";
import { detail } from "../../services/carmodel";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const model = await detail(id);

  if (!model) {
    return response
      .status(404)
      .json({ code: 404, message: "Modelo não encontrado" });
  }

  return response.json(model);
};
