
import { loginUser } from "../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserbyLogin = createAsyncThunk(
  'user/fetchByEmailPassword',
  async ({ email, password }, thunkAPI) => {
    const response = await loginUser(email,password);
    return response;
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