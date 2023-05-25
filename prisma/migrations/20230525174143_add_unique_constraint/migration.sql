/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `CarBrand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `CarColor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `CarModel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `CarBrand_name_key` ON `CarBrand`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `CarColor_name_key` ON `CarColor`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `CarModel_name_key` ON `CarModel`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Customer_email_key` ON `Customer`(`email`);
