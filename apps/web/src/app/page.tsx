import { ArticlesList } from "@/components/articles-list";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen max-w-screen-md mx-auto py-8 px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between pb-4 border-b-2">
          <h2 className="text-2xl font-bold tracking-tight">Articles</h2>
        </div>
        <ArticlesList />
      </main>
    </>
  );
}
