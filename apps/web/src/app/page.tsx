import { ArticleCard } from "@/components/article-card";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-md mx-auto py-14 px-6 sm:px-8 lg:px-12">
      <div className="flex items-center justify-between pb-4 border-b-2">
        <h2 className="text-2xl font-bold tracking-tight">Articles</h2>
      </div>
      <ul className="flex flex-col divide-y-2">
        <li>
          <ArticleCard />
        </li>
        <li>
          <ArticleCard />
        </li>
        <li>
          <ArticleCard />
        </li>
        <li>
          <ArticleCard />
        </li>
      </ul>
    </main>
  );
}
