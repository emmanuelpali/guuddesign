import { NextResponse } from "next/server"
import  { connectToDB }  from '@/utils/db'
import Post from "@/models/Post";


export const GET = async (request) => {
    try {
        await connectToDB()

        const posts = await Post.find()
        console.log(posts);
        return new NextResponse(JSON.stringify(posts), {status: 200})
    } catch (error) {
        return new NextResponse('Database error', {status: 500})
    }
    
}