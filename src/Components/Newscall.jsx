import { useState, useEffect } from "react";

import NewsItem from "./NewsItem";
function Newscall({cat}) {
  const [news, setNews] = useState([]);
  // const Newskey = "a8092128bea043ed897930597ef275b0";
  useEffect(() => {
    const fetchNews = async () => {
      await fetch(
        cat ? `https://gnews.io/api/v4/top-headlines?category=${cat}&lang=en&country=in&max=10&apikey=5c8fddfb3e174ab90c0355a18d0d0b09`
  :     `https://gnews.io/api/v4/top-headlines?&lang=en&country=in&max=10&apikey=5c8fddfb3e174ab90c0355a18d0d0b09`
      )
        .then((res) => res.json())
        .then((data) => setNews(data.articles));
    };

    fetchNews();
  }, [cat]);

  return (
    <div>
      <h1 className="text-center text-light ">
        Latest <span className="badge bg-danger">News</span>
      </h1>
      {news.map((item, index) => {
        return (
          <NewsItem
            key={index}
            title={item.title}
            description={item.description}
            src={item.image}
            url={item.url}
          />
        );
      })}
    </div>
  );
}

export default Newscall;
