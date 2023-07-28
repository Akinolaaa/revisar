
export const apiUrls = {
  user: {
    loginUser: '/auth/login/',
    signupUser: '/auth/signup',
    getReviewersByField: (field) => `/reviewers/${field}`,
  },
  articles: {
    getAllArticles: '/articles/getAllArticles',
    getArticlebyId: (id) => `/articles/${id}`,
    submitArticle: '/articles/submitArticle',
    getArticlesByUserId: (userId) => `/articles/user/${userId}`,
    declineAnArticle: (id) => `/articles/${id}`,
    assignReviewers: (articleId) => `/articles/${articleId}/assign-reviewers`
  },
}