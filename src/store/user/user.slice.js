import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentStart(state, action) {
      state.isLoading = true;
    },
    setCurrentUserSuccess(state, action) {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setCurrentUserFailed(state, action) {
      state.error = action.payload;
    },
  }

});

export const { setCurrentUserStart, setCurrentUserSuccess, setCurrentUserFailed, setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;