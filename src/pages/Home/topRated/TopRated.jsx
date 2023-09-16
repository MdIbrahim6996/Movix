import React, { useEffect } from "react";

import Carousel from "../../../components/Carousel/Carousel";

import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMedia, fetchTopRatedMedia } from "../../../store/features/home/homeSlice";

const TopRated = () => {
  const dispatch = useDispatch();
  const { topRated: data } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(fetchTopRatedMedia());
  }, []);

  return (
    <div className="carouselSection">
      <div className="contentWrapper">
        <span className="carouselTitle">TopRated</span>
      </div>
      <Carousel data={data?.results} />
    </div>
  );
};

export default TopRated;
