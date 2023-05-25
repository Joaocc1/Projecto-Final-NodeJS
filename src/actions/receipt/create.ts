import { Request, Response } from "express";
import { add } from "../../services/receipt";

export default async (request: Request, response: Response) => {
  const { total, customerId, vehicleId, itemIds } = request.body;

  const newReceipt = await add(total, customerId, vehicleId, itemIds);

  return response.json(newReceipt);
};
