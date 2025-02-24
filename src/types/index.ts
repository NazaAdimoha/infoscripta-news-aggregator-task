export interface NewsAPISource {
    id: string | null;
    name: string;
  }
  
  export interface NewsAPIArticle {
    source: NewsAPISource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }
  
  export interface NewsAPIResponse {
    status: "ok" | "error";
    totalResults: number;
    articles: NewsAPIArticle[];
  } 


  //Guradian Interface
  export interface GuardianArticle {
    id: string;
    type: string;
    sectionId: string;
    sectionName: string;
    webPublicationDate: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    isHosted: boolean;
    pillarId: string;
    pillarName: string;
  }
  
  export interface GuardianResponse {
    response: {
      status: string;
      userTier: string;
      total: number;
      startIndex: number;
      pageSize: number;
      currentPage: number;
      pages: number;
      orderBy: string;
      results: GuardianArticle[];
    }
  } 

  //NYTIMES Inteface
  export interface NYTimesMultimedia {
    rank: number;
    subtype: string;
    caption: string | null;
    credit: string | null;
    type: string;
    url: string;
    height: number;
    width: number;
    legacy: {
      xlarge: string;
      xlargewidth: number;
      xlargeheight: number;
    };
    subType: string;
    crop_name: string;
  }
  
  export interface NYTimesArticle {
    _id: string,
    abstract: string;
    web_url: string;
    snippet: string;
    lead_paragraph: string;
    source: string;
    multimedia: NYTimesMultimedia[];
    pub_date: string;
    news_desk: string;
    section_name: string;
  }
  
  export interface NYTimesResponse {
    status: string;
    copyright: string;
    response: {
      docs: NYTimesArticle[];
      meta: {
        hits: number;
        offset: number;
        time: number;
      }
    }
  } 