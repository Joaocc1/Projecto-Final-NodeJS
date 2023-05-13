import { PrismaClient, CarModel } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.carModel.findMany({
    where: { deleted: false },
  });

const detail = (id: string) =>
  prisma.carModel.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const add = (name: string) =>
  prisma.carModel.create({
    data: {
      name,
    },
  });

const update = (id: string, carModel: CarModel) =>
  prisma.carModel.update({
    where: { id },
    data: carModel,
  });

const remove = (id: string) =>
  prisma.carModel.update({
    where: { id },
    data: { deleted: true },
  });

export { all, detail, add, update, remove };
