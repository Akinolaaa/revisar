import { createAsyncThunk } from "@reduxjs/toolkit";
import  { getArticlesByUserId, getAllArticles } from "../../api/api";

export const fetchArticlesByUser = createAsyncThunk(
  'articles/fetchArticlesByUserId',
  async ({userId, token}, thunkAPI) => {
    const response = await getArticlesByUserId(userId, token);
    return response;
  }
)

export const fetchAllArticles = createAsyncThunk(
  'articles/fetchAllArticles',
  async (token, thunkAPI) => {
    // console.log("on this shit")
    const response = await getAllArticles(token);
    return response;
  }
)