/*
  Warnings:

  - Made the column `vehicleId` on table `receipt` required. This step will fail if there are existing NULL values in that column.
  - Made the column `customerId` on table `vehicle` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `receipt` DROP FOREIGN KEY `Receipt_vehicleId_fkey`;

-- DropForeignKey
ALTER TABLE `vehicle` DROP FOREIGN KEY `Vehicle_customerId_fkey`;

-- AlterTable
ALTER TABLE `receipt` MODIFY `vehicleId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `vehicle` MODIFY `customerId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Receipt` ADD CONSTRAINT `Receipt_vehicleId_fkey` FOREIGN KEY (`vehicleId`) REFERENCES `Vehicle`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
