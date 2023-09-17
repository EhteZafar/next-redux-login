import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type data = {
  token?: any;
};

const initialState = {
  token: "",
} as data;

export const login = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }) => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email: payload.email,
      password: payload.password,
    });
    return res.data.data.jwt;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  },
});
export default authSlice.reducer;
export const { login: loginAction } = authSlice.actions;
