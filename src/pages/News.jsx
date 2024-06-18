import React, { useState, useEffect } from 'react';
import NewsItem from '../components/NewsItem';
import Spinner from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearch } from '../contexts/useSearch';

const News = ({ category, setProgress, API_KEY }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);

  const {searchText, setSearchText} = useSearch()

  useEffect(() => {
    setPage(1)
    getNews();
  }, [category,searchText]);

  const getNews = async () => {
    setLoading(true);
    setProgress(0)

    const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${searchText}&apiKey=${API_KEY}&page=${page}&pageSize=20`;
    try {
      setProgress(30)

      const response = await fetch(URL);
      const newsData = await response.json();
      setProgress(70)
      setNews(newsData.articles);
      setTotalResult(newsData.totalResults);
      setLoading(false);
      setProgress(100)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchMoreData = async () => {
    let nextPage = page + 1
    const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}&page=${nextPage}&pageSize=20`;
    try { 
      const response = await fetch(URL);
      const newsData = await response.json();
      setNews(news.concat(newsData.articles));
      setPage(nextPage)

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      <h1 className='font-bold text-4xl m-4 text-center text-shadow-lg'>
      Top {category.charAt(0).toUpperCase() + category.slice(1)} Headlines
      </h1>
      <div>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={news.length}
          next={fetchMoreData}
          hasMore={news.length !== totalResult}
          loader={<Spinner />}
        >
          <div className="card-container flex flex-wrap justify-start">
            {news.map((item, ind) => (
              <div key={ind}>
                  <NewsItem
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    imageUrl={item.urlToImage}
                    publishedDate={item.publishedAt}
                  />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default News;
