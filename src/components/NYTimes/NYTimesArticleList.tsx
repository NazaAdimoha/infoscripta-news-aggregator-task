
import { NYTimesArticle } from "../../types"
import { NYTimesArticleCard } from "./NYTimesArticle"

interface NYTimesArticleListProps {
  data: NYTimesArticle[] | undefined
}

export function NYTimesArticleList({ data }: NYTimesArticleListProps) {
  if (!data?.length) return null

  return (
    <div className="space-y-4">
      {data.map((article) => (
        <NYTimesArticleCard key={article._id} article={article} />
      ))}
    </div>
  )
} 