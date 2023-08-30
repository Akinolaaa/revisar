
export const apiUrls = {
  user: {
    loginUser: '/auth/login/',
    signupUser: '/auth/signup',
    getReviewersByField: (field:string) => `/reviewers/${field}`,
  },
  articles: {
    getAllArticles: '/articles/getAllArticles',
    getArticlebyId: (id:string) => `/articles/${id}`,
    submitArticle: '/articles/submitArticle',
    getArticlesByUserId: (userId:string) => `/articles/user/${userId}`,
    declineAnArticle: (id:string) => `/articles/${id}`,
    assignReviewers: (articleId :string) => `/articles/${articleId}/assign-reviewers`
  },
}