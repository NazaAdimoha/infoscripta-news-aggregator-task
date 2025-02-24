import { NewsAPIArticle } from "../../types"
import { NewsAPIArticleCard } from "./NewsAPIArticle"

interface NewsAPIArticleListProps {
  data: NewsAPIArticle[] | undefined
}

export function NewsAPIArticleList({ data }: NewsAPIArticleListProps) {
  if (!data?.length) return null

  return (
    <div className="space-y-4">
      {data.map((article) => (
        <NewsAPIArticleCard key={article.url} article={article} />
      ))}
    </div>
  )
} 