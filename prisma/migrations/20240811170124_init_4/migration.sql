/*
  Warnings:

  - You are about to drop the column `categoryId` on the `products` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Products_categoryId_fkey` ON `products`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `categoryId`;
