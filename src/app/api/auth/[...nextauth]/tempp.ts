"use server";

import { Temp } from "../../../../redux/features/temp";

export const Temp2 = async (email: string, password: string) => {
  console.log("email", email);
  console.log("password", password);

  return "token";
};
