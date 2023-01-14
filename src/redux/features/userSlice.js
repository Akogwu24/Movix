import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: true,
  isLoading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    logout: (state) => {
      state.isLoading = false;
      state.user = false;
      state.error = false;
    },
  },
});

export const { loginFailure, loginStart, loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
