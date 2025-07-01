import bcrypt from "bcrypt";

export async function compareHashedPasword(password, hashedPassword) {
  try {
    const unhashedPassword = await bcrypt.compare(password, hashedPassword);
    return unhashedPassword;
  } catch (error) {
    console.log("Password comparing error " + error);
    throw new Error("Password comparing error");
  }
}
