import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromApi } from "../../../api/movieApi";

export const fetchSearchMedia = createAsyncThunk(
  "movies/fetchSearchMedia",
  async ({query, pageNum}, thunkAPI) => {
    const data = await fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`);
    return data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    movie: {},
  },
  extraReducers: {
    [fetchSearchMedia.fulfilled]: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export default searchSlice.reducer
