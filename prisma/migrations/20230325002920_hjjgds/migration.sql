/*
  Warnings:

  - You are about to drop the column `maxExperience` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `minExperience` on the `Job` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "maxExperience",
DROP COLUMN "minExperience",
ADD COLUMN     "experience" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "rate" "SalaryRate" NOT NULL DEFAULT 'MONTH';
