import { PrismaClient, Customer } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.customer.findMany({
    where: { deleted: false },
  });

const detail = (id: string) =>
  prisma.customer.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const add = (
  name: string,
  email: string,
  birthdate: string,
  address?: string
) =>
  prisma.customer.create({
    data: {
      name,
      email,
      birthdate,
      address,
    },
  });

const update = (id: string, customer: Customer) =>
  prisma.item.update({
    where: { id },
    data: customer,
  });

const remove = (id: string) =>
  prisma.customer.update({
    where: { id },
    data: { deleted: true },
  });

export { all, detail, add, update, remove };
