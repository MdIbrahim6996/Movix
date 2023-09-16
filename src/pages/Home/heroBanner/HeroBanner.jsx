import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import "./HeroBanner.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovie } from "../../../store/features/home/homeSlice";
import Img from "../../../components/LazyLoadImage/Img";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { movies, url } = useSelector((state) => state.home);
  // const { data, loading } = useFetch("/movie/upcoming");

  const dispatch = useDispatch();
  //   useEffect(() => {
  //     const bg =
  //         url.backdrop +
  //         data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
  //     setBackground(bg);
  // }, [data]);

  useEffect(() => {
    dispatch(fetchMovie());
    const bg =
      url?.poster +
      movies?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, []);

  const searchQueryHandler = (event) => {
    if (query.length < 1) return;

    // if (event.key === "Enter" && query.length > 0) {
    //   navigate(`/search/${query}`);
    // }
    navigate(`/search/${query}`);
  };

  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        <Img
          src={!background ? "/wick.jpg" : background}
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="opacity-layer"></div>
      <div className="contentWrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              // onKeyUp={searchQueryHandler}
            />
            <button onClick={() => searchQueryHandler()}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
