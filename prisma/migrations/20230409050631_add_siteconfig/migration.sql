/*
  Warnings:

  - You are about to drop the `Currency` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
ALTER TYPE "CompanyEnquiryType" ADD VALUE 'EDUCATION';

-- AlterTable
ALTER TABLE "SiteConfig" ADD COLUMN     "extra" JSONB,
ADD COLUMN     "socialLinks" JSONB[] DEFAULT ARRAY[]::JSONB[];

-- DropTable
DROP TABLE "Currency";
