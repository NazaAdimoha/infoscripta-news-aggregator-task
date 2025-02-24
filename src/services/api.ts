import axios from 'axios';

import { DateRange, Source } from '../store/useStore';

const API_KEYS = {
  NewsAPI: import.meta.env.VITE_NEWS_API_KEY,
  GuardianAPI: import.meta.env.VITE_GUARDIAN_API_KEY,
  NYTimes: import.meta.env.VITE_NYTIMES_API_KEY,
};

const API_ENDPOINTS = {
  NewsAPI: "https://newsapi.org/v2/everything",
  GuardianAPI: "https://content.guardianapis.com/search",
  NYTimes: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
};

const getDateParams = (dateRange: DateRange) => {
  const now = new Date();
  const getDate = (daysAgo: number) => {
    const date = new Date(now);
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString().split('T')[0];
  };

  const days = {
    '24h': 1,
    '7d': 7,
    '30d': 30,
  }[dateRange];

  return {
    from: getDate(days),
    to: now.toISOString().split('T')[0],
  };
};


interface RateLimit {
  remaining: number;
  total: number;
}

const rateLimits = new Map<Source, RateLimit>();

export const getRateLimits = () => Object.fromEntries(rateLimits);

const updateRateLimit = (source: Source, headers: any) => {
  switch (source) {
    case 'NewsAPI':
      rateLimits.set(source, {
        remaining: parseInt(headers['x-api-calls-remaining'] || '0'),
        total: parseInt(headers['x-api-calls-limit'] || '100')
      });
      break;
    
  }
};

const fetchFromAPI = async (
  source: keyof typeof API_ENDPOINTS,
  keyword: string,
  dateRange: DateRange,
  page: number
): Promise<any> => {
  try {
    const dates = getDateParams(dateRange);
    const params = new URLSearchParams();
    
    // Configured params based on the API response here
    switch (source) {
      case 'NewsAPI':
        params.append('q', keyword);
        params.append('from', dates.from);
        params.append('to', dates.to);
        params.append('page', String(page));
        params.append('apiKey', API_KEYS.NewsAPI);

        const responseNewsAPI = await axios.get(`${API_ENDPOINTS[source]}?${params.toString()}`);
        updateRateLimit(source as Source, responseNewsAPI.headers);
        
        // Return the raw NewsAPI response
        return {
          source,
          data: responseNewsAPI.data.articles || []
          
        };
      case 'GuardianAPI':
        params.append('q', keyword);
        params.append('from-date', dates.from);
        params.append('to-date', dates.to);
        params.append('page', String(page));
        params.append('api-key', API_KEYS.GuardianAPI);

        const responseGuardianAPI = await axios.get(`${API_ENDPOINTS[source]}?${params.toString()}`);
        updateRateLimit(source as Source, responseGuardianAPI.headers);

        // Return the raw GuardianAPI response
        return {
          source,
          data: responseGuardianAPI.data.response.results || []
        };
      case 'NYTimes':
        params.append('q', keyword);
        params.append('begin_date', dates.from);
        params.append('end_date', dates.to);
        params.append('page', String(page));
        params.append('api-key', API_KEYS.NYTimes);

        const responseNYTimes = await axios.get(`${API_ENDPOINTS[source]}?${params.toString()}`);
        updateRateLimit(source as Source, responseNYTimes.headers);

        // Return the raw NYTimes response
        return {
          source,
          data: responseNYTimes.data.response.docs || []
        };
      
        default:
        console.error(`Unsupported API source: ${source}`);
        return { source, data: [], error: `Unsupported API: ${source}` };
    }

    // const response = await axios.get(`${API_ENDPOINTS[source]}?${params.toString()}`);
    // updateRateLimit(source as Source, response.headers);
    // const articles = (response.data.articles || []).map((article: RawArticle) => 
    //   normalizeArticle(article, source)
    // );

    // return { source, data: [] };
  } catch (error) {
    console.error(`API ${source} failed:`, error);
    return { source, data: [], error: source };
  }
};

export { fetchFromAPI };