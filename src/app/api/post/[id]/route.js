import { NextResponse } from "next/server";
import { connectToDB } from '@utils/db';
import Post from "@/models/Post";


export const GET = async (request, {params}) => {
    const {id} = params
    try {
        await connectToDB()

        const post = await Post.findById(id)
        console.log(post);
        return new NextResponse(JSON.stringify(post), {status: 200})
    } catch (error) {
        return new NextResponse('Database error', {status: 500})
    }
    
}