/*
  Warnings:

  - You are about to drop the column `Name` on the `carbrand` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `carcolor` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `carmodel` table. All the data in the column will be lost.
  - You are about to drop the column `Observations` on the `vehicle` table. All the data in the column will be lost.
  - You are about to drop the column `PlateLicense` on the `vehicle` table. All the data in the column will be lost.
  - Added the required column `name` to the `CarBrand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `CarColor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `CarModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plateLicense` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `carbrand` DROP COLUMN `Name`,
    ADD COLUMN `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `carcolor` DROP COLUMN `Name`,
    ADD COLUMN `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `carmodel` DROP COLUMN `Name`,
    ADD COLUMN `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `vehicle` DROP COLUMN `Observations`,
    DROP COLUMN `PlateLicense`,
    ADD COLUMN `observations` LONGTEXT NULL,
    ADD COLUMN `plateLicense` VARCHAR(255) NOT NULL;
