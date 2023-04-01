/*
  Warnings:

  - The `start_salary` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `max_salary` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `_JobToJobSeeker` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('ACCEPTED', 'PENDING', 'DECLINED');

-- DropForeignKey
ALTER TABLE "_JobToJobSeeker" DROP CONSTRAINT "_JobToJobSeeker_A_fkey";

-- DropForeignKey
ALTER TABLE "_JobToJobSeeker" DROP CONSTRAINT "_JobToJobSeeker_B_fkey";

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "start_salary",
ADD COLUMN     "start_salary" INTEGER,
DROP COLUMN "max_salary",
ADD COLUMN     "max_salary" INTEGER;

-- DropTable
DROP TABLE "_JobToJobSeeker";

-- CreateTable
CREATE TABLE "Applications" (
    "id" TEXT NOT NULL,
    "jobSeekerId" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Applications_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Applications" ADD CONSTRAINT "Applications_jobSeekerId_fkey" FOREIGN KEY ("jobSeekerId") REFERENCES "JobSeeker"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applications" ADD CONSTRAINT "Applications_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;
