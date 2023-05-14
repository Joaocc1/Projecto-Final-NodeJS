import { Request, Response } from "express";
import { detail } from "../../services/customer";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const customer = await detail(id);

  if (!customer) {
    return response
      .status(404)
      .json({ code: 404, message: "Cliente não encontrado" });
  }

  return response.json(customer);
};
