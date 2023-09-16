import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./features/home/homeSlice";
import detailsSlice from "./features/details/detailsSlice";
import searchSlice from "./features/search/searchSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    details: detailsSlice,
    search: searchSlice,
  },
});
