import { Card, Badge } from '@mantine/core'
import { GuardianArticle } from '../../types'

interface GuardianArticleProps {
  article: GuardianArticle
}

export function GuardianArticleCard({ article }: GuardianArticleProps) {
  return (
    <Card className="overflow-hidden hover:bg-accent/50 transition-all duration-300 
      transform hover:scale-[1.02] shadow-sm hover:shadow-md animate-fade-in">
      <Badge 
        variant="filled" 
        color="green" 
        className="absolute top-2 right-2 z-10"
      >
        Guardian
      </Badge>
      <Card.Section p="md" className="space-y-3">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="space-y-1 flex-1">
            <h2 className="text-lg font-semibold leading-tight line-clamp-2">
              <a 
                href={article.webUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline decoration-green-200"
              >
                {article.webTitle}
              </a>
            </h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" size="sm">
                {article.sectionName}
              </Badge>
              <Badge variant="outline" size="sm">
                {article.pillarName}
              </Badge>
            </div>
          </div>
        </div>
      </Card.Section>
      <Card.Section p="md" className="space-y-2.5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <time dateTime={article.webPublicationDate}>
            {new Date(article.webPublicationDate).toLocaleDateString()}
          </time>
          <span>•</span>
          <span className="truncate">The Guardian</span>
        </div>
      </Card.Section>
    </Card>
  )
} 