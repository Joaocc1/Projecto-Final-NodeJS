import { Request, Response } from "express";
import { detail, update } from "../../services/receipt";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detail(id))) {
    return response.status(404).json({
      code: 404,
      message: "Factura não encontrada",
    });
  }

  const { itemIds, total, ...receiptData } = request.body;
  const receipt = await update(id, receiptData, itemIds, total);

  return response.json(receipt);
};
