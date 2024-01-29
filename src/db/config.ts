import mongoose from "mongoose";

export default async function connection() {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.ufyvc9o.mongodb.net/`, {
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
