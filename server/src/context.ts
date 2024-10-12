import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export function createContext({ req, res }: CreateExpressContextOptions) {
  const isAdmin = Math.floor(Math.random() * 10);

  return {
    req,
    res,
    isAdmin,
  };
}
