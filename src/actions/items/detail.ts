import { Request, Response } from "express";
import { detail } from "../../services/items";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const item = await detail(id);

  if (!item) {
    return response
      .status(404)
      .json({ code: 404, message: "Item não encontrado" });
  }

  return response.json(item);
};
