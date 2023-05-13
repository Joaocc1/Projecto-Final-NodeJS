import { Request, Response } from "express";
import { detail } from "../../services/vehicle";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const vehicle = await detail(id);

  if (!vehicle) {
    return response
      .status(404)
      .json({ code: 404, message: "Veiculo não encontrado" });
  }

  return response.json(vehicle);
};
