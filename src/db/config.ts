import mongoose from "mongoose";

export default async function connection() {
  try {
    await mongoose.connect(process.env.MONGODB_URL!, {
      tls: true,
    });
    console.log('Successfully connected');
  } catch (err) {
    console.error('Internal error occurred', err);
  }
}

export const closeConnection = async () => {
  await mongoose.connection.close();
  console.log('Connection closed');
}
