import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchDataFromApi } from "./api/movieApi";
import { getApiConfiguration } from "./store/features/home/homeSlice";

import Footer from "./components/Footer/Footer";
import Details from "./pages/Details/Details";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import SearchResult from "./pages/SearchResult/SearchResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:mediaType/:id",
    element: <Details />,
  },
  {
    path: "/search/:query",
    element: <SearchResult />,
  },
  {
    path: "/explore/:mediaType",
    element: <Explore />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  const dispatch = useDispatch();

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  useEffect(() => {
    fetchApiConfig();
  }, [dispatch]);
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
