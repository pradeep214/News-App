import { useState, useEffect } from "react";

import NewsItem from "./NewsItem";
function Newscall({cat}) {
  const [news, setNews] = useState([]);
  const Newskey = "a8092128bea043ed897930597ef275b0";
  useEffect(() => {
    const fetchNews = async () => {
      await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=${Newskey}`
      )
        .then((res) => res.json())
        .then((data) => setNews(data.articles));
    };

    fetchNews();
  }, [cat]);

  return (
    <div>
      <h1 className="text-center text-light">
        Latest <span className="badge bg-danger">News</span>
      </h1>
      {news.map((item, index) => {
        return (
          <NewsItem
            key={index}
            title={item.title}
            description={item.description}
            src={item.urlToImage}
            url={item.url}
          />
        );
      })}
    </div>
  );
}

export default Newscall;
