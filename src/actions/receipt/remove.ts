import { Request, Response } from "express";
import { detail, remove } from "../../services/receipt";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detail(id))) {
    return response.status(404).json({
      code: 404,
      message: "Factura não encontrada",
    });
  }

  await remove(id);
  return response.json();
};
