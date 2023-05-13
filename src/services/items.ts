import { PrismaClient, Item } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.item.findMany({
    where: { deleted: false },
  });

const detail = (id: string) =>
  prisma.item.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const add = (name: string, price: string, description?: string) =>
  prisma.item.create({
    data: {
      name,
      price,
      description,
    },
  });

const update = (id: string, item: Item) =>
  prisma.item.update({
    where: { id },
    data: item,
  });

const remove = (id: string) =>
  prisma.item.update({
    where: { id },
    data: { deleted: true },
  });

export { all, detail, add, update, remove };
