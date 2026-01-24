import { getDb } from "./db.js";

export async function createUser(user) {
  const db = await getDb(); // 👈 THIS is the usage
  await db.users.insertOne(user);
}
