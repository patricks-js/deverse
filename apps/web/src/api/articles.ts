export type Article = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: string;
  tags: string[];
  favoritesCount: number;
  author: {
    username: string;
    name: string;
    email: string;
    image: string;
  };
  createdAt: string;
};

export type FetchArticlesResponse = {
  page: number;
  perPage: number;
  totalPages: number;
  itemsInPage: number;
  totalItems: number;
  items: Article[];
};

export async function fetchArticles() {
  // const query = page > 0 ? `?page=${page}` : "";
  const response = await fetch("http://localhost:3333/api/articles");
  const data = await response.json();

  return data as FetchArticlesResponse;
}
