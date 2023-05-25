import { PrismaClient, Receipt } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.receipt.findMany({
    where: { deleted: false },
    include: {
      items: true,
    },
  });

const detail = (id: string) =>
  prisma.receipt.findFirst({
    where: {
      id,
      deleted: false,
    },
    include: {
      items: true,
    },
  });

const add = (
  total: number,
  customerId: string,
  vehicleId: string,
  itemIds: string[]
) =>
  prisma.receipt.create({
    data: {
      total,
      customer: {
        connect: {
          id: customerId,
        },
      },
      Vehicle: {
        connect: {
          id: vehicleId,
        },
      },
      items: {
        connect: itemIds.map((itemId) => ({
          id: itemId,
        })),
      },
    },
    include: {
      items: true,
    },
  });

// const add = async (
//   customerId: string,
//   vehicleId: string,
//   itemIds: string[]
// ) => {
//   const items = await prisma.item.findMany({
//     where: {
//       id: { in: itemIds },
//     },
//   });

//   const total = items.reduce((acc, item) => acc + parseFloat(item.price), 0);

//   const createdReceipt = await prisma.receipt.create({
//     data: {
//       total,
//       customer: {
//         connect: {
//           id: customerId,
//         },
//       },
//       Vehicle: {
//         connect: {
//           id: vehicleId,
//         },
//       },
//       items: {
//         connect: itemIds.map((itemId) => ({
//           id: itemId,
//         })),
//       },
//     },
//     include: {
//       items: true,
//     },
//   });

//   return createdReceipt;
// };

// const update = (id: string, receipt: Receipt) =>
//   prisma.receipt.update({
//     where: { id },
//     data: receipt,
//     include: {
//       items: true,
//     },
//   });

const update = (
  id: string,
  receipt: Receipt,
  itemIds: string[],
  total: number
) =>
  prisma.receipt.update({
    where: { id },
    data: {
      ...receipt,
      total,
      items: {
        set: itemIds.map((itemId) => ({ id: itemId })),
      },
    },
    include: {
      items: true,
    },
  });

const remove = (id: string) =>
  prisma.receipt.update({
    where: { id },
    data: { deleted: true },
  });

export { all, detail, add, update, remove };
