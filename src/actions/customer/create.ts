import { Request, Response } from "express";
import { add } from "../../services/customer";

export default async (request: Request, response: Response) => {
  const { name, email, birthdate, address } = request.body;

  const newCustomer = await add(name, email, birthdate, address);

  return response.json(newCustomer);
};
