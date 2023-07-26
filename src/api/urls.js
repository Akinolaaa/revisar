
export const apiUrls = {
  user: {
    loginUser: '/auth/login/',
    signupUser: '/auth/signup',
  },
  articles: {
    getAllArticles: '/articles/getAllArticles',
    getArticlebyId: (id) => `/articles/${id}`,
    submitArticle: '/articles/submitArticle',
    getArticlesByUserId: (userId) => `/articles/user/${userId}`
  },
}