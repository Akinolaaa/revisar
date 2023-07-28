import { createAsyncThunk } from "@reduxjs/toolkit";
import  { getArticlesByUserId } from "../../api/api";

export const fetchArticlesByUser = createAsyncThunk(
  'articles/fetchAllArticles',
  async ({userId, token}, thunkAPI) => {
    const response = await getArticlesByUserId(userId,token);
    return response;
  }
)