export interface NewsAPISource {
  id: string | null;
  name: string;
}

export interface NewsAPIArticle {
  source: NewsAPISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsAPIResponse {
  status: "ok" | "error";
  totalResults: number;
  articles: NewsAPIArticle[];
} 