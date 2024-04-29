
import { prisma } from '@/lib/prisma'
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"



export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            profile(profile) {
                return ({ id: profile.email })
            }

        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async signIn({ account, profile }): Promise<any> {
            if (!profile?.email) {
                throw new Error('no profile')
            }

            await prisma.user.upsert({
                where: {
                    email: profile.email
                },
                create: {
                    email: profile.email,
                    name: profile.name
                },
                update: {
                    name: profile.name
                }

            })
        }

    }
}