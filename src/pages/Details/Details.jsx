import React, { useEffect } from "react";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMediaCredits,
  fetchMediaVideos,
} from "../../store/features/details/detailsSlice";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Recommendation from "./carousels/Recommendation";
import Similar from "./carousels/Similar";

const Details = () => {
  const { mediaType, id } = useParams();
  const dispatch = useDispatch();

  const { videos, credits } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(fetchMediaVideos({ mediaType, id }));
    dispatch(fetchMediaCredits({ mediaType, id }));
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div>
      <DetailsBanner video={videos?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} />
      <VideosSection data={videos} />
      <Similar />
      <Recommendation />
    </div>
  );
};

export default Details;
