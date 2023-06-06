
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider  from "next-auth/providers/credentials";
import { connectToDB } from "@/utils/db";
import User from "@/models/User";
import bcrypt from 'bcryptjs'


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret : process.env.GOOGLE_SECRET,
        }),FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
          }),CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials){
                await connectToDB()

                try{
                    const user = await User.findOne({email: credentials.email});

                    if(user) {
                        const isCorrectPassword = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if(isCorrectPassword) {
                            console.log(user);
                            
                            return user;
                        }else {
                            throw new Error('Wrong credentials');
                        }
                    }else {
                        throw new Error("user not found")
                    }
                }catch(err){
                    throw new Error("could not find user")
                }
            }
          })         
    ],
    pages:{
        error:"/dashboard/login"
    },
});

export { handler as GET, handler as POST}