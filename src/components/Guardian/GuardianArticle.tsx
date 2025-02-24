import { GuardianArticle } from './types'
import { Card, Badge } from '@mantine/core'

interface GuardianArticleProps {
  article: GuardianArticle
}

export function GuardianArticleCard({ article }: GuardianArticleProps) {
  return (
    <Card className="overflow-hidden hover:bg-accent/50 transition-colors relative">
      <Badge 
        variant="filled" 
        color="green" 
        className="absolute top-2 right-2 z-10"
      >
        Guardian
      </Badge>
      <Card.Section p="md" className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold leading-tight">
              <a 
                href={article.webUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {article.webTitle}
              </a>
            </h2>
            <div className="flex gap-2">
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
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <time dateTime={article.webPublicationDate}>
            {new Date(article.webPublicationDate).toLocaleDateString()}
          </time>
          <span>•</span>
          <span>The Guardian</span>
        </div>
      </Card.Section>
    </Card>
  )
} 