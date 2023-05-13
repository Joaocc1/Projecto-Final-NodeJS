import { PrismaClient, Receipt } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.receipt.findMany({
    where: { deleted: false },
  });

const detail = (id: string) =>
  prisma.receipt.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const add = (
  total: number,
  vehicleId: string,
  items: { name: string; price: string }[]
) =>
  prisma.receipt.create({
    data: {
      total,
      vehicleId,
      items: {
        create: items,
      },
    },
  });

const update = (id: string, receipt: Receipt) =>
  prisma.receipt.update({
    where: { id },
    data: receipt,
  });

const remove = (id: string) =>
  prisma.receipt.update({
    where: { id },
    data: { deleted: true },
  });

export { all, detail, add, update, remove };
