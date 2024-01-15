import NextAuth from 'next-auth';
import CredentialsProvider from '@auth/core/providers/credentials';
import type { NextAuthConfig } from 'next-auth';

export const config = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Max" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
  ],
  pages: {
    signIn: '/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/auth/new-user'
  },
  // callbacks: {
  //   authorized({ request, auth }): boolean {
  //
  //     const { pathname } = request.nextUrl;
  //     console.log('pathname', pathname)
  //     if (pathname === '/middleware-example') return !!auth;
  //     return true;
  //   },
  // },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id
      }
      return token
    }
  }

} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut} = NextAuth(config);
