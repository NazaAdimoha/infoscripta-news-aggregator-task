import { useState } from "react"
// import { RateLimitIndicator } from "./components/RateLimitIndicator" 
// import { Source } from "./store/useStore"
// import { ArticleCard } from "./components/ArticleCard"
import { Filters } from "./components/Filters"
import { SearchBar } from "./components/SearchBar"
import { useArticles } from "./hooks/useArticles"
// import { getRateLimits } from "./services/api"
import { NewsAPIArticleList } from "./components/NewsAPI/NewsAPIArticleList"
import { GuardianArticleList } from "./components/Guardian/GuardianArticleList"
import { NYTimesArticleList } from "./components/NYTimes/NYTimesArticleList"
import { Card, Loader } from "@mantine/core"

function App() {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  // const { articles, isLoading, isError } = useArticles(search, page)
  const { newsAPI, guardianAPI, nyTimesAPI, isLoading, isError } = useArticles(search, page)
  // const rateLimits = getRateLimits()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 w-full md:w-3/4 lg:w-1/2">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-sm font-medium md:text-2xl md:font-bold mb-6 text-center animate-fade-in">
            News Aggregator
            <span className="block text-xs font-normal mt-1 text-slate-500">
              Your unified news dashboard
            </span>
          </h1>
          <div className="w-full max-w-2xl">
            <SearchBar onSearch={(value) => {
              setSearch(value)
              setPage(1)
            }} />
          </div>
        </div>

        {/* Filters and Rate Limits */}
        <div className="mx-auto mb-8 w-full max-w-2xl">
          <Card className="animate-pop-in">
            <Card.Section p="md">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="flex-1">
                  <Filters />
                </div>
                <div className="flex-1">
                  {/* <Text size="lg" fw={500} mb="md">API Rate Limits</Text> */}
                  {/* <RateLimitIndicator limits={Object.entries(rateLimits).map(([source, limit]) => ({
                    source: source as Source,
                    ...limit
                  }))} /> */}
                </div>
              </div>
            </Card.Section>
          </Card>
        </div>

        {/* Articles */}
        <main className="mx-auto w-full max-w-4xl">
          {isLoading ? (
            <div className="flex justify-center items-center h-32 animate-pulse">
              <Loader size="lg" />
            </div>
          ) : isError ? (
            <div className="text-center text-muted-foreground animate-shake">
              ⚠️ Error loading articles. Please try again.
            </div>
          ) : (
            <div className="space-y-4">
              {newsAPI && <NewsAPIArticleList data={newsAPI} />}
              {guardianAPI && <GuardianArticleList data={guardianAPI} />}
              {nyTimesAPI && <NYTimesArticleList data={nyTimesAPI} />}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
