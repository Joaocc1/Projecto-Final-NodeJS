import { Request, Response } from "express";
import { detail } from "../../services/carcolor";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const color = await detail(id);

  if (!color) {
    return response
      .status(404)
      .json({ code: 404, message: "Cor não encontrada" });
  }

  return response.json(color);
};
