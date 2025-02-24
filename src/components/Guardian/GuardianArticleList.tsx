import { GuardianArticle } from "./types"
import { GuardianArticleCard } from "./GuardianArticle"

interface GuardianArticleListProps {
  data: GuardianArticle[] | undefined
}

export function GuardianArticleList({ data }: GuardianArticleListProps) {
  if (!data?.length) return null

  return (
    <div className="space-y-4">
      {data.map((article) => (
        <GuardianArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
} 