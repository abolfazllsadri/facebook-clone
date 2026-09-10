import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: { signIn: "/login" },
  providers: [Google],
  secret: process.env.NEXTAUTH_SECRET!,
  callbacks: {
    async session({ session, token }) {
      if (session.user) session.user.id = token.sub!;
      return session;
    },
  },
});
