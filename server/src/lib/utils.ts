import { compare, genSalt, hash } from "bcrypt";
import { sign, verify } from "jsonwebtoken";

export const HashPassword = async (password: string) => {
  const salts = await genSalt(10);
  return await hash(password, salts);
};

export const comparePassword = async (
  hashedPassword: string,
  password: string
) => {
  return await compare(password, hashedPassword);
};

function add_Days() {
  const date = new Date();
  const result = date.setDate(date.getDate() + 5);
  return result;
}

export function generateJWT() {
  const data = {
    id: 23,
    name: "jwt",
  };
  const token = sign(data, "secret", {
    expiresIn: "5d",
  });

  console.log(token);
  const verified = verify(token, "secret");
  console.log(verified);

  return;
}
