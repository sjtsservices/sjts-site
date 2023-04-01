/*
  Warnings:

  - You are about to drop the column `experience` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `isOnline` on the `Job` table. All the data in the column will be lost.
  - The `skills` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('FULL_TIME', 'PART_TITME', 'FREELANCE');

-- CreateEnum
CREATE TYPE "SalaryRate" AS ENUM ('HOUR', 'MONTH', 'YEAR');

-- CreateEnum
CREATE TYPE "JobSeekerCategory" AS ENUM ('PREMIUM', 'GENERAL');

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "experience",
DROP COLUMN "isOnline",
ADD COLUMN     "maxExperience" INTEGER,
ADD COLUMN     "minExperience" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "summary" TEXT,
ADD COLUMN     "type" "JobType" NOT NULL DEFAULT 'FULL_TIME',
DROP COLUMN "skills",
ADD COLUMN     "skills" JSONB[] DEFAULT ARRAY[]::JSONB[];

-- CreateTable
CREATE TABLE "JobSeeker" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image_url" TEXT,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cvUrl" TEXT NOT NULL,
    "category" "JobSeekerCategory" NOT NULL DEFAULT 'GENERAL',
    "description" TEXT,

    CONSTRAINT "JobSeeker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_JobToJobSeeker" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "JobSeeker_email_key" ON "JobSeeker"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_JobToJobSeeker_AB_unique" ON "_JobToJobSeeker"("A", "B");

-- CreateIndex
CREATE INDEX "_JobToJobSeeker_B_index" ON "_JobToJobSeeker"("B");

-- AddForeignKey
ALTER TABLE "_JobToJobSeeker" ADD CONSTRAINT "_JobToJobSeeker_A_fkey" FOREIGN KEY ("A") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToJobSeeker" ADD CONSTRAINT "_JobToJobSeeker_B_fkey" FOREIGN KEY ("B") REFERENCES "JobSeeker"("id") ON DELETE CASCADE ON UPDATE CASCADE;
