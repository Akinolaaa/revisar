
import { loginUser } from "../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllArticles, fetchArticlesByUser } from "../articles/articles.thunk";

export const fetchUserbyLogin = createAsyncThunk(
  'user/fetchByEmailPassword',
  async ({ email, password }, thunkAPI) => {
    const res = await loginUser(email,password);
    const {user} = res.user
    const {token} = res
    const { role, id } = user
    switch(role){
        case "reviewer":
          console.log("reviewer log in needs work here")
          break;
        case "editor":
          await thunkAPI.dispatch(fetchAllArticles(token))
          break;
        default: 
          // navigate('/dash');
          await thunkAPI.dispatch(fetchArticlesByUser({userId: id, token}))
          break;
      } 
    return res;
  }
)

// import { setCurrentUserFailed, setCurrentUserStart, setCurrentUserSuccess } from "./user.slice";

// // const navigate = useNavigate();
// export const setCurrentUserAsync = (email, password) => async(dispatch) => {
//   dispatch(setCurrentUserStart());
//   try {
//     const user = await loginUser(email, password);
//     dispatch(setCurrentUserSuccess(user));
//     // navigate("./dash");
//   } catch(err){
//     dispatch(setCurrentUserFailed(err))
//     console.log("login failed", err)
//   }
// }