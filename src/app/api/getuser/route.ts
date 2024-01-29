import { NextResponse } from "next/server";
import Users from "@/models/userModel";

export async function GET() {
    try {
        const users: any = await Users.find();
        return NextResponse.json(users)
    } catch (error) {
        console.log(error, "dsfghjk");
    }
}