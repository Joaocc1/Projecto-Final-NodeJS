import { PrismaClient, CarColor } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.carColor.findMany({
    where: { deleted: false },
  });

const detail = (id: string) =>
  prisma.carColor.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const add = (name: string) =>
  prisma.carColor.create({
    data: {
      name,
    },
  });

const update = (id: string, carColor: CarColor) =>
  prisma.carColor.update({
    where: { id },
    data: carColor,
  });

const remove = (id: string) =>
  prisma.carColor.update({
    where: { id },
    data: { deleted: true },
  });

export { all, detail, add, update, remove };
