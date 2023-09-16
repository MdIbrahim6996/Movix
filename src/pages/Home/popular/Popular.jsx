import React, { useEffect } from "react";

import Carousel from "../../../components/Carousel/Carousel";

import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMedia } from "../../../store/features/home/homeSlice";

const Popular = () => {
  const dispatch = useDispatch();
  const { popular: data } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(fetchPopularMedia());
  }, []);

  return (
    <div className="carouselSection">
      <div className="contentWrapper">
        <span className="carouselTitle">Popular</span>
      </div>
      <Carousel data={data?.results} />
    </div>
  );
};

export default Popular;
