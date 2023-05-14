import { Request, Response } from "express";
import { detail } from "../../services/receipt";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const receipt = await detail(id);

  if (!receipt) {
    return response
      .status(404)
      .json({ code: 404, message: "Factura não encontrada" });
  }

  return response.json(receipt);
};
