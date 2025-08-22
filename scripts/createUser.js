// scripts/createUser.js

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" }); // explicitly load .env.local

import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";

async function main() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("MONGODB_URI is not defined in .env.local");

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("myStore"); // your DB name
    const users = db.collection("users");

    const email = "test@example.com";
    const name = "Test User";
    const password = "123456";

    const existing = await users.findOne({ email });
    if (existing) {
      console.log("User already exists!");
      process.exit();
    }

    const hashed = await bcrypt.hash(password, 10);
    await users.insertOne({ email, name, password: hashed });

    console.log("✅ User created successfully!");
    await client.close();
    process.exit();
  } catch (err) {
    console.error("❌ Error creating user:", err.message);
    process.exit(1);
  }
}

main();
