import React, { useEffect } from "react";

import Carousel from "../../../components/Carousel/Carousel";

import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMedia } from "../../../store/features/home/homeSlice";

const Upcoming = () => {
  const dispatch = useDispatch();
  const { upcoming: data } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(fetchUpcomingMedia());
  }, []);

  return (
    <div className="carouselSection">
      <div className="contentWrapper">
        <span className="carouselTitle">Upcoming</span>
      </div>
      <Carousel data={data?.results} />
    </div>
  );
};

export default Upcoming;
