/*
  Warnings:

  - Made the column `carBrandId` on table `vehicle` required. This step will fail if there are existing NULL values in that column.
  - Made the column `carModelId` on table `vehicle` required. This step will fail if there are existing NULL values in that column.
  - Made the column `customerId` on table `vehicle` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `vehicle` DROP FOREIGN KEY `Vehicle_carBrandId_fkey`;

-- DropForeignKey
ALTER TABLE `vehicle` DROP FOREIGN KEY `Vehicle_carModelId_fkey`;

-- DropForeignKey
ALTER TABLE `vehicle` DROP FOREIGN KEY `Vehicle_customerId_fkey`;

-- AlterTable
ALTER TABLE `vehicle` MODIFY `carBrandId` VARCHAR(191) NOT NULL,
    MODIFY `carModelId` VARCHAR(191) NOT NULL,
    MODIFY `customerId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_carBrandId_fkey` FOREIGN KEY (`carBrandId`) REFERENCES `CarBrand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_carModelId_fkey` FOREIGN KEY (`carModelId`) REFERENCES `CarModel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
