/*
  Warnings:

  - You are about to drop the column `isBuyer` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isSeller` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "isBuyer",
DROP COLUMN "isSeller";
