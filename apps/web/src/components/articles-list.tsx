"use client";

import { fetchArticles } from "@/api/articles";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ArticleCard } from "./article-card";
import { Button } from "./ui/button";

export function ArticlesList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });

  if (isLoading) return "Loading...";

  if (error || !data) return "Error loading articles";

  function handleNextPage() {}

  function handlePreviousPage() {}

  return (
    <>
      <ul className="flex flex-col divide-y-2">
        {data.items.map((article) => (
          <li key={article.id}>
            <ArticleCard
              title={article.title}
              description={article.description}
              tags={article.tags}
              author={article.author}
              createdAt={article.createdAt}
            />
          </li>
        ))}
      </ul>
      <div className="text-sm flex items-center justify-between mt-4">
        <span className="text-muted-foreground">
          {data.itemsInPage} articles of {data.totalItems}
        </span>
        <div className="flex gap-2 items-center">
          <span>
            Page {data.page + 1} of {data.totalPages}
          </span>
          <div className="space-x-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={handlePreviousPage}
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button variant="secondary" size="icon" onClick={handleNextPage}>
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
