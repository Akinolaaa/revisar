import { createSelector } from "@reduxjs/toolkit";

const selectArticlesSlice = (state) => state.articles;

export const selectArticles = createSelector([selectArticlesSlice], (articles) => articles.articles);

export const selectPendingArticlesCount = createSelector(
  [selectArticles],
  (articles) => articles.reduce((acc, article) => {
    if (article.status === "pending") {
      acc += 1;
    }
    return acc;
  }, 0)
);
export const selectRejectedArticlesCount = createSelector(
  [selectArticles],
  (articles) => articles.reduce((acc, article) => {
    if (article.status === "rejected") {
      acc += 1;
    }
    return acc;
  }, 0)
);
export const selectApprovedArticlesCount = createSelector(
  [selectArticles],
  (articles) => articles.reduce((acc, article) => {
    if (article.status === "approved") {
      acc += 1;
    }
    return acc;
  }, 0)
);
export const selectAssignedArticlesCount = createSelector(
  [selectArticles],
  (articles) => articles.reduce((acc, article) => {
    if (article.status === "assigned") {
      acc += 1;
    }
    return acc;
  }, 0)
);
export const selectInReviewArticlesCount = createSelector(
  [selectArticles],
  (articles) => articles.reduce((acc, article) => {
    if (article.status === "in-review") {
      acc += 1;
    }
    return acc;
  }, 0)
);
