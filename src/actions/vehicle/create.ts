import { Request, Response } from "express";
import { add } from "../../services/vehicle";

export default async (request: Request, response: Response) => {
  const {
    plateLicense,
    carBrandId,
    carModelId,
    carColorId,
    customerId,
    observations,
  } = request.body;

  const newVehicle = await add(
    plateLicense,
    carBrandId,
    carModelId,
    carColorId,
    customerId,
    observations
  );

  return response.json(newVehicle);
};
