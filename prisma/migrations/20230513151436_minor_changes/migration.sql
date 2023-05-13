/*
  Warnings:

  - You are about to drop the column `Description` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `Price` on the `item` table. All the data in the column will be lost.
  - Added the required column `name` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `item` DROP COLUMN `Description`,
    DROP COLUMN `Name`,
    DROP COLUMN `Price`,
    ADD COLUMN `description` LONGTEXT NULL,
    ADD COLUMN `name` VARCHAR(255) NOT NULL,
    ADD COLUMN `price` VARCHAR(255) NOT NULL;
