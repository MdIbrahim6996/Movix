import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Carousel from "../../../components/Carousel/Carousel";
import { fetchRecommendationMedia } from "../../../store/features/details/detailsSlice";

const Recommendation = () => {
   

    const { mediaType, id } = useParams();

    // const { data, loading, error } = useFetch(
    //     `/${mediaType}/${id}/recommendations`
    // );

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRecommendationMedia({ mediaType, id }));
      }, [id]);

      const {recommendation:data} = useSelector(state=>state.details)
    return (

        <Carousel
            title="Recommendations"
            data={data?.results}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;