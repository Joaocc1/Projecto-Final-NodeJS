import { PrismaClient, CarBrand } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.carBrand.findMany({
    where: { deleted: false },
  });

const detail = (id: string) =>
  prisma.carBrand.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const add = (name: string) =>
  prisma.carBrand.create({
    data: {
      name,
    },
  });

const update = (id: string, carBrand: CarBrand) =>
  prisma.carBrand.update({
    where: { id },
    data: carBrand,
  });

const remove = (id: string) =>
  prisma.carBrand.update({
    where: { id },
    data: { deleted: true },
  });

export { all, detail, add, update, remove };
