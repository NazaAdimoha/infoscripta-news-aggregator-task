import { NewsAPIArticle } from './types'
import { Card, Badge } from '@mantine/core'

interface NewsAPIArticleProps {
  article: NewsAPIArticle
}

export function NewsAPIArticleCard({ article }: NewsAPIArticleProps) {
  return (
    <Card className="overflow-hidden hover:bg-accent/50 transition-colors bg-black">
      <Badge 
        variant="filled" 
        color="blue" 
        className="absolute top-2 right-2 z-10"
      >
        NewsAPI
      </Badge>
      <Card.Section p="md">
        <div className="flex gap-4">
          {article.urlToImage && (
            <div className="flex-shrink-0">
              <img 
                src={article.urlToImage} 
                alt="" 
                className="w-[150px] h-[150px] object-cover rounded-md"
                loading="lazy"
              />
            </div>
          )}
          
          <div className="flex-1 min-w-0 space-y-2">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold leading-tight line-clamp-2">
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {article.title}
                </a>
              </h2>
              {article.source.name && (
                <Badge variant="outline" size="sm">
                  {article.source.name}
                </Badge>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground line-clamp-2">
              {article.description}
            </p>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              {article.author && <span className="truncate">{article.author}</span>}
              {article.author && <span>•</span>}
              <time dateTime={article.publishedAt} className="shrink-0">
                {new Date(article.publishedAt).toLocaleDateString()}
              </time>
            </div>
          </div>
        </div>
      </Card.Section>
    </Card>
  )
} 