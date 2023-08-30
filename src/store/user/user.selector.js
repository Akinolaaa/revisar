//ReturnType<typeof rootReducer>

export const selectCurrentUser = (state) => state.user.currentUser;

export const selectCurrentUserToken = (state) => state.user.currentUser.token;