-- DropForeignKey
ALTER TABLE "tb_comments" DROP CONSTRAINT "tb_comments_post_id_fkey";

-- CreateTable
CREATE TABLE "tb_favorited_posts" (
    "id" SERIAL NOT NULL,
    "post_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "tb_favorited_posts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_favorited_posts" ADD CONSTRAINT "tb_favorited_posts_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "tb_posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_favorited_posts" ADD CONSTRAINT "tb_favorited_posts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tb_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_comments" ADD CONSTRAINT "tb_comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "tb_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
