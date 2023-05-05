import { Request, Response } from "express";
import { detail } from "../../services/orders";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const order = await detail(id);

  if (!order) {
    return response.status(404).json({
      code: 404,
      message: "Product not found",
    });
  }

  return response.json(order);
};
