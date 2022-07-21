/* eslint-disable no-undef */
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findByEmail } from "../../../models/user";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await findByEmail(credentials.username);
        if (user) {
          return user;
        }

        return null;
      },
    }),
  ],

  callbacks: {
    session: async (session, user) => {
      if (user) session.id = user.id;
      return Promise.resolve(session);
    },
  },
  pages: {},
});
