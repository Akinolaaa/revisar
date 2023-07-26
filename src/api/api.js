import axios from 'axios';
import { apiUrls } from './urls';

const api = axios.create({
  baseURL: `http://localhost:3000/api/v1/`,
});

export const loginUser = async (email, password) => {
  try {
    let res = await api.post(apiUrls.user.loginUser,{ email, password });
    return res.data;
  }catch(err) {
    console.log("error logging in user", err)
  }
}

export const signUpUser = async (signUpOptions) => {
  try {
    let res = await api.post(apiUrls.user.signupUser, {...signUpOptions});
    return res.data;
  } catch (err) {
    console.log("error signing in", err)
  }
}

export const getAllArticles = async() => {
  try {
    const articles = await api.get(apiUrls.articles.getAllArticles);
    return articles;
  } catch (err) {
    console.log("unable to get all articles", err)
  }
}

export const submitArticle = async(formData, token) => {
  try {
    const res = await api.post(apiUrls.articles.submitArticle, formData,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res;
  } catch(err) {
    console.log("unable to submit form", err);
  }
}

export const getArticlesByUserId = async(userId, token) => {
  try {
    const res = await api.get(apiUrls.articles.getArticlesByUserId(userId), {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.data;
  } catch(err) {
    console.log("unable to get articles by userId", err);
  }
} 