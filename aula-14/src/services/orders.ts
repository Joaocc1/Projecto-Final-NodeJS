import { PrismaClient, Order } from "@prisma/client";

export const prisma = new PrismaClient();

const all = (userId: string) =>
  prisma.order.findMany({
    where: {
      userId,
      deleted: false,
    },
    include: {
      products: true,
    },
  });

const detail = (id: string) =>
  prisma.order.findFirst({
    where: { id, deleted: false },
    include: {
      products: true,
    },
  });

const add = (userId: string, productIds: string[]) =>
  prisma.order.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      products: {
        connect: productIds.map((productId) => ({ id: productId })),
      },
    },
    include: {
      products: true,
    },
  });

const update = (id: string, productIds: string[]) =>
  prisma.order.update({
    where: {
      id,
    },
    data: {
      products: {
        connect: productIds.map((productId) => ({ id: productId })),
      },
    },
    include: {
      products: true,
    },
  });

const remove = (id: string) =>
  prisma.order.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { all, detail, add, update, remove };
