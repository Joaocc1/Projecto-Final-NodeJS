/*
  Warnings:

  - You are about to drop the column `Address` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `Birthdate` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `customer` table. All the data in the column will be lost.
  - Added the required column `birthdate` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer` DROP COLUMN `Address`,
    DROP COLUMN `Birthdate`,
    DROP COLUMN `Email`,
    DROP COLUMN `Name`,
    ADD COLUMN `address` VARCHAR(255) NULL,
    ADD COLUMN `birthdate` DATE NOT NULL,
    ADD COLUMN `email` VARCHAR(255) NOT NULL,
    ADD COLUMN `name` VARCHAR(255) NOT NULL;
