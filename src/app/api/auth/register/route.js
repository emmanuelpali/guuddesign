import { connectToDB } from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import User from "@/models/User";

export const POST = async (request) => {
    const { name, email, password } = await request.json();

    await connectToDB();

    const hashedPassword = await bcrypt.hash(password, 6);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    })

    try {
        await newUser.save();
        return new NextResponse("Successfully registered", { status: 201});
    } catch (error) {
        console.log(error.message);
        return new NextResponse(error.message, { status: 500});
    }
}