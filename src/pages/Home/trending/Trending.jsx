import React, { useEffect } from "react";

import Carousel from "../../../components/Carousel/Carousel";

import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMedia } from "../../../store/features/home/homeSlice";

const Trending = ({type = "trending"}) => {
  const dispatch = useDispatch();
  const { trending: data } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(fetchTrendingMedia(type));
  }, []);

  return (
    <div className="carouselSection">
      <div className="contentWrapper">
        <span className="carouselTitle">Trending</span>
      </div>
      <Carousel data={data?.results} />
    </div>
  );
};

export default Trending;
