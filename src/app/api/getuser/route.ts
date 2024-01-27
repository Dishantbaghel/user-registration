import { NextResponse } from "next/server";
import User from "@/models/userModel";

export async function GET() {
    try {
        const users: any = await User.find();
        return NextResponse.json(users)
    } catch (error) {
        console.log(error, "dsfghjk");
    }
}