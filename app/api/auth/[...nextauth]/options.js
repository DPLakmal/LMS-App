import GoogleProvider from 'next-auth/providers/google'
import dotenv from 'dotenv'
import { prisma } from '@/lib/prisma'
import { NextAuthOptions } from 'next-auth'
import { profile } from 'console'

dotenv.config()

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: prisma.user.role,
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ profile, user }) {
      const userData = {
        email: profile.email,
        username: profile.name,
        role: '',
      }

      try {
        const response = await fetch('http://localhost:3001/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        })

        try {
          const responseData = await response.json()
          user.role = responseData.role
          return true
        } catch (jsonError) {
          console.error('JSON parsing error:', jsonError.message)
          return false
        }

        // prisma.user.role = 'fsdfs'
      } catch (error) {
        console.error('Registration error:', error.message)
        // Handle registration error (display error message to the user, etc.)
      }
    },

    async jwt({ token, user }) {
      if (user) token.role = user.role
      console.log(token)
      return token
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role
      return session
    },
  },
}
