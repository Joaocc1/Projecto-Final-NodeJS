import { Request, Response } from "express";
import { detail } from "../../services/carbrand";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const brand = await detail(id);

  if (!brand) {
    return response
      .status(404)
      .json({ code: 404, message: "Marca não encontrada" });
  }

  return response.json(brand);
};
