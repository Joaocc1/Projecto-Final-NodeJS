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
  customerId: string,
  carColorId?: string,
  observations?: string
) =>
  prisma.vehicle.create({
    data: {
      plateLicense,
      observations,
      CarBrand: {
        connect: {
          id: carBrandId,
        },
      },
      CarModel: {
        connect: {
          id: carModelId,
        },
      },
      CarColor: {
        connect: {
          id: carColorId,
        },
      },
      Customer: {
        connect: {
          id: customerId,
        },
      },
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
