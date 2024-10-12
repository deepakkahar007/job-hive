import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./src";
import { createContext } from "./src/context";

const app = express();
const port = process.env.PORT || 3000;
const server_Url = process.env.SERVER_URL || "http://localhost";

app.use(cors({ origin: process.env.CLIENT_URL }));

app.use(
  "/",
  createExpressMiddleware({
    router: appRouter,
    createContext: createContext,
  })
);

const server = () => {
  try {
    app.listen(port, () => {
      console.log(`server started ${server_Url}:${port}`);
    });
  } catch (error) {
    console.log("something wen wrong", error);
  }
};

server();
