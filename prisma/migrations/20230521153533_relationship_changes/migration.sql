/*
  Warnings:

  - You are about to drop the `receiptitems` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `customerId` to the `Receipt` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `receiptitems` DROP FOREIGN KEY `ReceiptItems_itemId_fkey`;

-- DropForeignKey
ALTER TABLE `receiptitems` DROP FOREIGN KEY `ReceiptItems_receiptId_fkey`;

-- DropForeignKey
ALTER TABLE `vehicle` DROP FOREIGN KEY `Vehicle_customerId_fkey`;

-- AlterTable
ALTER TABLE `receipt` ADD COLUMN `customerId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `vehicle` MODIFY `customerId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `receiptitems`;

-- CreateTable
CREATE TABLE `_ItemToReceipt` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ItemToReceipt_AB_unique`(`A`, `B`),
    INDEX `_ItemToReceipt_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Receipt` ADD CONSTRAINT `Receipt_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ItemToReceipt` ADD CONSTRAINT `_ItemToReceipt_A_fkey` FOREIGN KEY (`A`) REFERENCES `Item`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ItemToReceipt` ADD CONSTRAINT `_ItemToReceipt_B_fkey` FOREIGN KEY (`B`) REFERENCES `Receipt`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
