import { Card, Badge } from '@mantine/core'
import { NYTimesArticle } from '../../types'

interface NYTimesArticleProps {
  article: NYTimesArticle
}

export function NYTimesArticleCard({ article }: NYTimesArticleProps) {
  const mainImage = article.multimedia?.find(m => m.subtype === 'xlarge')

  return (
    <Card className="overflow-hidden hover:bg-accent/50 transition-all duration-300 
      transform hover:scale-[1.02] shadow-sm hover:shadow-md animate-fade-in">
      <Badge 
        variant="filled" 
        color="orange" 
        className="absolute top-2 right-2 z-10"
      >
        NY Times
      </Badge>
      <Card.Section p="md" className="space-y-3">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4">
          <div className="space-y-1 flex-1">
            <h2 className="text-lg font-semibold leading-tight line-clamp-2">
              <a 
                href={article.web_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline decoration-orange-200"
              >
                {article.abstract}
              </a>
            </h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" size="sm">
                {article.section_name}
              </Badge>
              {article.news_desk && (
                <Badge variant="outline" size="sm">
                  {article.news_desk}
                </Badge>
              )}
            </div>
          </div>
          {mainImage && (
            <div className="w-full md:w-24 h-24 flex-shrink-0">
              <img 
                src={mainImage.url} 
                alt="" 
                className="w-full h-full object-cover rounded-md"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </Card.Section>
      <Card.Section p="md" className="space-y-2.5">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {article.lead_paragraph}
        </p>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="truncate">{article.source}</span>
          <span>•</span>
          <time dateTime={article.pub_date}>
            {new Date(article.pub_date).toLocaleDateString()}
          </time>
        </div>
      </Card.Section>
    </Card>
  )
} 