import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataFromApi } from "../../../api/movieApi";


export const fetchMovie = createAsyncThunk(
  "movies/fetchMovie",
  async (thunkAPI) => {
    const data = await fetchDataFromApi(`/movie/upcoming`);
    return data;
  }
);

export const fetchTrendingMedia = createAsyncThunk(
  "movies/fetchTrendingMedia",
  async (type, thunkAPI) => {
    const data = await fetchDataFromApi(`/${type}/all/day`);
    return data;
  }
);

export const fetchPopularMedia = createAsyncThunk(
  "movies/fetchPopularMedia",
  async (thunkAPI) => {
    const data = await fetchDataFromApi(`/movie/popular`);
    return data;
  }
);

export const fetchTopRatedMedia = createAsyncThunk(
  "movies/fetchTopRatedMedia",
  async (thunkAPI) => {
    const data = await fetchDataFromApi(`/movie/top_rated`);
    return data;
  }
);

export const fetchUpcomingMedia = createAsyncThunk(
  "movies/fetchUpcomingMedia",
  async (thunkAPI) => {
    const data = await fetchDataFromApi(`/movie/upcoming`);
    return data;
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
    movies: {},
    trending: {},
    popular: {},
    topRated: {},
    upcoming: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
  extraReducers: {
    [fetchTrendingMedia.fulfilled]: (state, action) => {
      state.trending = action.payload;
    },

    [fetchPopularMedia.fulfilled]: (state, action) => {
      state.popular = action.payload;
    },

    [fetchTopRatedMedia.fulfilled]: (state, action) => {
      state.topRated = action.payload;
    },

    [fetchUpcomingMedia.fulfilled]: (state, action) => {
      state.upcoming = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
