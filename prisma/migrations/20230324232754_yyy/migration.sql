/*
  Warnings:

  - The values [PART_TITME] on the enum `JobType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "JobType_new" AS ENUM ('FULL_TIME', 'PART_TIME', 'FREELANCE');
ALTER TABLE "Job" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "Job" ALTER COLUMN "type" TYPE "JobType_new" USING ("type"::text::"JobType_new");
ALTER TYPE "JobType" RENAME TO "JobType_old";
ALTER TYPE "JobType_new" RENAME TO "JobType";
DROP TYPE "JobType_old";
ALTER TABLE "Job" ALTER COLUMN "type" SET DEFAULT 'FULL_TIME';
COMMIT;
