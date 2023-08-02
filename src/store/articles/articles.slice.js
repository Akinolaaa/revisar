import { createSlice } from '@reduxjs/toolkit';
import { fetchArticlesByUser, fetchAllArticles } from './articles.thunk';

const INITIAL_STATE = {
  articles: [],
  isLoading: false,
  error: null,
}

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: INITIAL_STATE,
  reducers: {
    setArticles(state, action) {
      state.articles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesByUser.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.isLoading = false;
    })
    builder.addCase(fetchArticlesByUser.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(fetchArticlesByUser.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
    builder.addCase(fetchAllArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.isLoading = false;
    })
    builder.addCase(fetchAllArticles.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(fetchAllArticles.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
  }
});

export const { setArticles } = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;