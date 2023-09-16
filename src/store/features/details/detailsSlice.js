import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromApi } from "../../../api/movieApi";

export const fetchMediaVideos = createAsyncThunk(
  "movies/fetchMediaVideos",
  async ({ mediaType, id }, thunkAPI) => {
    const data = await fetchDataFromApi(`/${mediaType}/${id}/videos`);
    return data;
  }
);

export const fetchMediaCredits = createAsyncThunk(
  "movies/fetchMediaCredits",
  async ({ mediaType, id }, thunkAPI) => {
    const data = await fetchDataFromApi(`/${mediaType}/${id}/credits`);
    return data;
  }
);

export const fetchSimilarMedia = createAsyncThunk(
  "movies/fetchSimilarMedia",
  async ({ mediaType, id }, thunkAPI) => {
    const data = await fetchDataFromApi(`/${mediaType}/${id}/similar`);
    return data;
  }
);

export const fetchRecommendationMedia = createAsyncThunk(
  "movies/fetchRecommendationMedia",
  async ({ mediaType, id }, thunkAPI) => {
    const data = await fetchDataFromApi(`/${mediaType}/${id}/recommendations`);
    return data;
  }
);

const detailSlice = createSlice({
  name: "details",
  initialState: {
    banner: {},
    videos: {},
    credits: {},
    similar: {},
    recommendation: {},
  },
  extraReducers: {
    [fetchMediaVideos.fulfilled]: (state, { payload }) => {
      state.videos = payload;
    },

    [fetchMediaCredits.fulfilled]: (state, { payload }) => {
      state.credits = payload;
    },

    [fetchSimilarMedia.fulfilled]: (state, { payload }) => {
      state.similar = payload;
    },

    [fetchRecommendationMedia.fulfilled]: (state, { payload }) => {
      state.recommendation = payload;
    },
  },
});

export default detailSlice.reducer;
