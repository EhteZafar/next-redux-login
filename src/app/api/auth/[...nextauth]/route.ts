import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

// const temp = () => {
//     const token = useAppSelector((state) => state.authReducer.token);
//     const dispatch = useAppDispatch();

//     return dispatch(login({ email: "ehtesham", password: "123" }));
    
// }

export const authOptions: NextAuthOptions = {


  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: { username: string; password: string; }) {
        
        // const res = await temp();
        const user = { id: 1, name: "ehtesham", pass: "123" };
        if (credentials.username === user.name && credentials.password === user.pass) {
            return user;
            } else {
            return null;
            }
        }
    }),
    ],
};
    
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
