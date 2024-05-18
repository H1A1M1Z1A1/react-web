import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import MovieComponent from "./MovieComponent";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const apiKey = "M8HHFtz_elYLUqKq84q4UTABU-SAU2wlAmW87OSrUBc";

  const getCardData = async () => {
    // const res = await fetch(
    //   `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    // );
    // const data = await res.json();
    // console.log(data);

    const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=cat&client_id=${apiKey}`);
    const data = await response.json();
    console.log(1,data.results);

    // if (data.results && data.results.length > 0) {
    //   const firstImage = data.results[0];
    //   setImageUrl(firstImage.urls.full);
    // }

    setCard((prev) => [...prev, ...data.results]);
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <MovieComponent movieInfo={card} />
      {loading && <Loading />}
    </>
  );
};

export default Home;
