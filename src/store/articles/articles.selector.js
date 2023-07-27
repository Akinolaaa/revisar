import { createSelector } from "@reduxjs/toolkit";

const selectArticlesSlice = (state) => state.articles;

export const selectArticles = createSelector([selectArticlesSlice], (articles) => articles.articles);

export const selectPendingArticlesCount = (state) => state.articles.articles.reduce((acc, article) => {
  if (article.status === "pending") {
    acc += 1;
  }
  return acc;
}, 0);
export const selectRejectedArticlesCount = (state) => state.articles.articles.reduce((acc, article) => {
  if (article.status === "rejected") {
    acc += 1;
  }
  return acc;
}, 0);
export const selectApprovedArticlesCount = (state) => state.articles.articles.reduce((acc, article) => {
  if (article.status === "approved") {
    acc += 1;
  }
  return acc;
}, 0);
