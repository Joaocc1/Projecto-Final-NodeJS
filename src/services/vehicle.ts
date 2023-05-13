import { PrismaClient, Vehicle } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.vehicle.findMany({
    where: {
      deleted: false,
    },
  });

const detail = (id: string) =>
  prisma.vehicle.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const add = (
  plateLicense: string,
  carBrandId: string,
  carModelId: string,
  carColorId: string,
  customerId: string,
  observations?: string
) =>
  prisma.vehicle.create({
    data: {
      plateLicense,
      observations,
      carBrandId,
      carModelId,
      carColorId,
      customerId,
    },
  });

const update = (id: string, vehicle: Vehicle) =>
  prisma.vehicle.update({
    where: { id },
    data: vehicle,
  });

const remove = (id: string) =>
  prisma.vehicle.update({
    where: { id },
    data: { deleted: true },
  });

export { all, detail, add, update, remove };
