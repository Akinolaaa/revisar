import { createSlice } from '@reduxjs/toolkit';
import { fetchUserbyLogin } from './user.thunk';


const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserbyLogin.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    })
    builder.addCase(fetchUserbyLogin.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(fetchUserbyLogin.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
  }
});

export const { setCurrentUserStart, setCurrentUserSuccess, setCurrentUserFailed, setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;