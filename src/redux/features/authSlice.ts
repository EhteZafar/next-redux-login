import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type data = {
    token ?: any;
};

const initialState = {
    token: "",
} as data;

function authen(email: string, password: string) {
    console.log(email, password);
    const token = axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
    }).then((res) => {
        // console.log(res.data.data.jwt);
        return res.data.data.jwt;
    }).catch((err) => {
        console.log(err);
    });
    console.log("token", token);
    return token;
}

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{email: string, password: string }>) => {
            const res = authen(action.payload.email, action.payload.password);
            console.log("res", res);
            if (res) {
                state.token = res;
            }
            console.log("token", state.token);
            // console.log(res);
        },
    },
});

export const { login } = auth.actions;
export default auth.reducer;
