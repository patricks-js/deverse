/*
  Warnings:

  - You are about to drop the column `favorited` on the `tb_posts` table. All the data in the column will be lost.
  - Made the column `favorites_count` on table `tb_posts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "tb_posts" DROP COLUMN "favorited",
ALTER COLUMN "favorites_count" SET NOT NULL,
ALTER COLUMN "favorites_count" SET DEFAULT 0;
