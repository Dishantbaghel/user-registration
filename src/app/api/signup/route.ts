import { NextRequest, NextResponse } from "next/server";
import Users from "@/models/userModel";
import connection from "@/db/config";

connection();
export async function POST(request: NextRequest) {
  try {
   const body = await request.json();
   const { firstName, lastName, email, fatherName, motherName, address, pincode, country } = body
    await Users.create({ firstName, lastName, email, fatherName, motherName, address, pincode, country })
    return NextResponse.json({ message: "OK" }, { status: 201 });
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 201 });
    
  }
}