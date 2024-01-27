import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import connection from "@/db/config";
export async function POST(request: NextRequest) {
  try {
   const body = await request.json();
   const { firstName, lastName, email, fatherName, motherName, address, pincode, country } = body
    
    await User.create({ firstName, lastName, email, fatherName, motherName, address, pincode, country })
    return NextResponse.json({ message: "OK" }, { status: 201 });
  }
  catch (error) {
    console.log(error);
  }
}