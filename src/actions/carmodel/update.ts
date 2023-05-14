import { Request, Response } from "express";
import { detail, update } from "../../services/carmodel";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detail(id))) {
    return response.status(404).json({
      code: 404,
      message: "Modelo não encontrado",
    });
  }

  const model = await update(id, request.body);

  return response.json(model);
};
