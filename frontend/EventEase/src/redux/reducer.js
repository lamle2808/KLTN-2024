import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
  token: null,
  error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      loginSuccess: (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      },
      loginFailure: (state, action) => {
        state.error = action.payload;
      },
      logout: (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      }
    }
  });
  
  export const { loginSuccess, loginFailure, logout } = userSlice.actions;
  
  export const rootReducer = {
    user: userSlice.reducer,
  };
