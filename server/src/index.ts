import { publicProcedure, router } from "./trpc";
import { adminProcedure } from "./middleware";
import UserRouter from "./routes/UserRouter";
import { generateJWT } from "./lib/utils";

export const appRouter = router({
  user: UserRouter,
  secret: adminProcedure.query(({ ctx }) => {
    console.log(ctx.user);
    return "super secret data";
  }),
  jwt: publicProcedure.query(() => {
    generateJWT();

    return true;
  }),
});

export type AppRouter = typeof appRouter;
