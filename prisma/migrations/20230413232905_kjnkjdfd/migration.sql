/*
  Warnings:

  - Added the required column `jobCountry` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "jobCity" TEXT,
ADD COLUMN     "jobCountry" TEXT NOT NULL,
ADD COLUMN     "jobState" TEXT;
