/*
  Warnings:

  - You are about to drop the column `email` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `customers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `customers` DROP COLUMN `email`,
    DROP COLUMN `password`;
