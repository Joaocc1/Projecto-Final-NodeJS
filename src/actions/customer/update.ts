import { Request, Response } from "express";
import { detail, update } from "../../services/customer";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detail(id))) {
    return response.status(404).json({
      code: 404,
      message: "Cliente não encontrado",
    });
  }

  const customer = await update(id, request.body);

  return response.json(customer);
};
