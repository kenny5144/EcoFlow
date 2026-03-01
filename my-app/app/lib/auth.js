import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace with your "hardcoded" user for now
        if (
          credentials.email === "enekebe12@gmail.com" &&
          credentials.password === "Obianuju"
        ) {
          return { email: credentials.email };
        }
        return null; // invalid credentials
      },
    }),
  ],
  session: { strategy: "jwt" }, // server-side session
  pages: {
    signIn: "/Signin", // custom sign-in page
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };