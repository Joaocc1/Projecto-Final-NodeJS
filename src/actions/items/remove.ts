import { Request, Response } from "express";
import { detail, remove } from "../../services/items";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detail(id))) {
    return response.status(404).json({
      code: 404,
      message: "Item não encontrado",
    });
  }

  await remove(id);
  return response.json();
};
