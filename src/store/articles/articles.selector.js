import { createSelector } from "@reduxjs/toolkit";

const selectArticlesSlice = (state) => state.articles;

export const selectArticles = createSelector([selectArticlesSlice], (articles) => articles.articles);

export const selectStatusCount = (status) => createSelector(
  [selectArticles],
  (articles) => articles.reduce((acc, article) => {
    if (article.status === status) {
      acc += 1;
    }
    return acc;
  }, 0)
);

