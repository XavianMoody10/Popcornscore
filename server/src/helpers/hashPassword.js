import bcrypt from "bcrypt";

export async function hashPassword(password) {
  const saltRounds = 10;

  try {
    const hashed = await bcrypt.hash(password, saltRounds);
    return hashed;
  } catch (error) {
    console.log("Password hashing error " + error);
    throw new Error("Password hashing error");
  }
}
