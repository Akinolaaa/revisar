import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.slice";
import { articlesReducer } from "./articles/articles.slice";

export const rootReducer = combineReducers({
  user: userReducer,
  articles: articlesReducer,
});