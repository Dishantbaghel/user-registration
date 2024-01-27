import {  NextResponse } from "next/server";
import User from "@/models/userModel";
import connection from "@/db/config";

export async function GET(){
    try {
        await connection();
        const users :any = await User.find();    
        return NextResponse.json(users)
    } catch (error) {
        console.log(error,"dsfghjk");
    }
}