import axios from 'axios';
import { apiUrls } from './urls';

const api = axios.create({
  baseURL: `http://localhost:3000/api/v1/`,
});

export const loginUser = async (email: string, password: string) => {
  try {
    let res = await api.post(apiUrls.user.loginUser,{ email, password });
    return res.data;
  }catch(err) {
    console.log("error logging in user", err)
  }
}

export const signUpUser = async (signUpOptions: any) => {
  try {
    let res = await api.post(apiUrls.user.signupUser, {...signUpOptions});
    return res.data;
  } catch (err) {
    console.log("error signing in", err)
  }
}

export const getReviewersByField = async (field: string, token:string) => {
  try {
    let res = await api.get(apiUrls.user.getReviewersByField(field),{
      headers: {
        Authorization: `Bearer ${token}`
      }
  })
    return res.data.reviewers;
  } catch (err) {
    console.log("error signing in", err)
  }
}

export const assignReviewers = async (reviewers:string[], articleId:string, token:string) => {
  try {
    let res = await api.post(apiUrls.articles.assignReviewers(articleId),{
      reviewerIds: reviewers
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.data;
  } catch(err) {
    console.log("cannot assign reviewers at this time", err);
  }
}

// Articles

export const getAllArticles = async(token:string) => {
  try {
    const res = await api.get(apiUrls.articles.getAllArticles, {
      headers: {
        Authorization: `Bearer ${token}`
      }
  });
    return res.data.articles;
  } catch (err) {
    console.log("unable to get all articles", err)
  }
}

export const submitArticle = async(formData: any, token: string) => {
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

export const getArticlesByUserId = async(userId: string, token: string) => {
  try {
    const res = await api.get(apiUrls.articles.getArticlesByUserId(userId), {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.data;
  } catch(err) {
    throw err;// console.log("unable to get articles by userId", err);
  }
} 

export const declineAnArticle = async(articleId: string, token: string) => {
  try {
    const res = await api.put(apiUrls.articles.declineAnArticle(articleId),{
      status: "decline"
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  } catch (err) {
    console.log("unable to reject article", err);
  }
}