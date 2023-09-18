import { ServerComponent } from "next/server";
import { login } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

export const Temp: ServerComponent<{
  email: string;
  password: string;
}> = async ({ email, password }) => {
  console.log("email", email);
  const dispatch = useAppDispatch();

  await dispatch(login({ email, password }));

  const token = useAppSelector((state) => state.authReducer.token);

  if (!token) return null;

  return token;
};
