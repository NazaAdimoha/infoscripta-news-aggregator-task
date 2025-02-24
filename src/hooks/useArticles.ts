import { useQueries } from '@tanstack/react-query';
import { fetchFromAPI } from '../services/api';
import { useStore } from '../store/useStore';
import { toast } from 'sonner';
import { UseQueryResult } from '@tanstack/react-query';
// import { APIResponse } from '../types/article';
import { GuardianArticle, NewsAPIArticle, NYTimesArticle } from '../types';

export const useArticles = (search: string, page: number) => {
  const { selectedSources, dateRange } = useStore();
  const shouldFetch = search.trim().length > 0;

  const queries = useQueries({
    queries: selectedSources.map((source) => ({
      queryKey: ['articles', source, search, dateRange, page],
      queryFn: () => fetchFromAPI(source, search, dateRange, page),
      staleTime: 1000 * 60 * 5, 
      cacheTime: 1000 * 60 * 30, 
      retry: 1,
      enabled: shouldFetch,
      onError: () => {
        toast.error(`Failed to fetch articles from ${source}`);
      },
    })),
  });

  

  const results = queries.map((q: UseQueryResult<any>) => q.data || { source: '', data: [] });
  const isLoading = shouldFetch && queries.some((q: UseQueryResult<any>) => q.isLoading);
  const isError = shouldFetch && queries.some((q: UseQueryResult<any>) => q.isError);

  console.log(results);

  const newsAPI = results.find((r) => r.source === 'NewsAPI')?.data as NewsAPIArticle[];
  const guardianAPI = results.find((r) => r.source === 'GuardianAPI')?.data as GuardianArticle[];
  const nyTimesAPI = results.find((r) => r.source === 'NYTimes')?.data as NYTimesArticle[];

  console.log(newsAPI, guardianAPI, nyTimesAPI);


  return {
    newsAPI,
    guardianAPI,
    nyTimesAPI,
    isLoading,
    isError,
    isInitialState: !shouldFetch,
    hasMore: [].length >= 10 // Assuming 10 articles per page
  };
}; 