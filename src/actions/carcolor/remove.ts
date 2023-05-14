import { Request, Response } from "express";
import { detail, remove } from "../../services/carcolor";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detail(id))) {
    return response.status(404).json({
      code: 404,
      message: "Cor não encontrada",
    });
  }

  await remove(id);
  return response.json();
};
