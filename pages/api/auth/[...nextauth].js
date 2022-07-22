import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findByEmail } from "../../../models/user";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        const user = await findByEmail(credentials.username);
        if (user) {
          return user;
        }

        return null;
      },
    }),
  ],

  pages: { signIn: "/login" },
});
