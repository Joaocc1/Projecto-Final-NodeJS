import { Request, Response } from "express";
import { detail, remove } from "../../services/carbrand";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detail(id))) {
    return response.status(404).json({
      code: 404,
      message: "Marca não encontrada",
    });
  }

  await remove(id);
  return response.json();
};
