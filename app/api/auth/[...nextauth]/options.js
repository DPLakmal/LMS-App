import { prisma } from '@/lib/prisma'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        console.log(this.clientId)
        console.log(this.clientSecret)

        console.log(profile)
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role ?? 'user',
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role
      return session
    },

    // async signIn({ account, profile }) {
    //   if (!profile?.email) {
    //     throw new Error('no profile')
    //   }

    //   await prisma.user.upsert({
    //     where: {
    //       email: profile.email,
    //     },
    //     create: {
    //       email: profile.email,
    //       name: profile.name,
    //     },
    //     update: {
    //       name: profile.name,
    //     },
    //   })
    // },
  },
}
