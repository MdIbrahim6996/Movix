import React, { useEffect } from "react";

import Carousel from "../../../components/Carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { fetchSimilarMedia } from "../../../store/features/details/detailsSlice";
import { useParams } from "react-router-dom";

const Similar = () => {
    const { mediaType, id } = useParams();

//   const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSimilarMedia({ mediaType, id }));
  }, [id]);

  const {similar:data} = useSelector(state=>state.details)


  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <Carousel
      title={title}
      data={data?.results}
    //   loading={loading}
      endpoint={mediaType}
    />
  );
};

export default Similar;
