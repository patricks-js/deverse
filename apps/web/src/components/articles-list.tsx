"use client";

import { fetchArticles } from "@/api/articles";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ArticleCard } from "./article-card";
import { Button } from "./ui/button";

export function ArticlesList() {
  const [page, setPage] = useState(0);

  const { isLoading, error, data } = useQuery({
    queryKey: ["articles", page],
    queryFn: () => fetchArticles(page),
    placeholderData: keepPreviousData,
  });

  if (isLoading) return "Loading...";

  if (error || !data) return "Error loading articles";

  function handleNextPage() {
    if (data?.totalPages === page + 1) return;
    setPage(page + 1);
  }

  function handlePreviousPage() {
    if (page === 0) return;
    setPage(page - 1);
  }

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
          {data.itemsInPage + data.itemsInPage * page} articles of{" "}
          {data.totalItems}
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
