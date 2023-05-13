/*
  Warnings:

  - You are about to drop the column `receiptId` on the `item` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `Item_receiptId_fkey`;

-- AlterTable
ALTER TABLE `item` DROP COLUMN `receiptId`;

-- CreateTable
CREATE TABLE `ReceiptItems` (
    `receiptId` VARCHAR(191) NOT NULL,
    `itemId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`receiptId`, `itemId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ReceiptItems` ADD CONSTRAINT `ReceiptItems_receiptId_fkey` FOREIGN KEY (`receiptId`) REFERENCES `Receipt`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReceiptItems` ADD CONSTRAINT `ReceiptItems_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
