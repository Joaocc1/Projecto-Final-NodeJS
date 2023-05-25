import { Request, Response } from "express";
import { add } from "../../services/vehicle";

export default async (request: Request, response: Response) => {
  const {
    plateLicense,
    carBrandId,
    carModelId,
    customerId,
    carColorId,
    observations,
  } = request.body;

  const newVehicle = await add(
    plateLicense,
    carBrandId,
    carModelId,
    customerId,
    carColorId,
    observations
  );

  return response.json(newVehicle);
};
