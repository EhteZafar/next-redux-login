"use client";

import { login } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

export const Temp = async (email: string, password: string) => {
  const dispatch = useAppDispatch();

  await dispatch(login({ email, password }));

  const token = useAppSelector((state) => state.authReducer.token);

  if (!token) return null;

  return token;
};
