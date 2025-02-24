import { Card, Badge } from '@mantine/core'
import { NewsAPIArticle } from '../../types'

interface NewsAPIArticleProps {
  article: NewsAPIArticle
}

export function NewsAPIArticleCard({ article }: NewsAPIArticleProps) {
  return (
    <Card className="overflow-hidden hover:bg-accent/50 transition-all duration-300 
      transform hover:scale-[1.02] shadow-sm hover:shadow-md animate-fade-in">
      <Badge 
        variant="filled" 
        color="blue" 
        className="absolute top-2 right-2 z-10"
      >
        NewsAPI
      </Badge>
      <Card.Section p="md">
        <div className="flex flex-col md:flex-row gap-4">
          {article.urlToImage && (
            <div className="flex-shrink-0 w-full md:w-[150px]">
              <img 
                src={article.urlToImage} 
                alt="" 
                className="w-full h-[150px] object-cover rounded-md"
                loading="lazy"
              />
            </div>
          )}
          
          <div className="flex-1 min-w-0 space-y-2">
            <h2 className="text-lg font-semibold leading-tight line-clamp-2">
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline decoration-blue-200"
              >
                {article.title}
              </a>
            </h2>
            {article.source.name && (
              <Badge variant="outline" size="sm" className="mb-2">
                {article.source.name}
              </Badge>
            )}
            <p className="text-sm text-muted-foreground line-clamp-2">
              {article.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              {article.author && <span className="truncate">{article.author}</span>}
              {article.author && <span>•</span>}
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString()}
              </time>
            </div>
          </div>
        </div>
      </Card.Section>
    </Card>
  )
} 