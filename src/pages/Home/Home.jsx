import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

import "./Home.scss";
import Upcoming from "./upcoming/Upcoming";
const Home = () => {
  return (
    <div>
      <div className="homePage">
        <HeroBanner />
        <Trending />

        <Popular />
        <TopRated />
        <Upcoming/>
      </div>
    </div>
  );
};

export default Home;
