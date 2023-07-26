import { createSlice } from '@reduxjs/toolkit';

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
  }

});

export const { setArticles } = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;