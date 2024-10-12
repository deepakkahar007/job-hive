import { router } from "./trpc";
import { adminProcedure } from "./middleware";
import UserRouter from "./routes/user";

export const appRouter = router({
  user: UserRouter,
  secret: adminProcedure.query(({ ctx }) => {
    console.log(ctx.user);
    return "super secret data";
  }),
});

export type AppRouter = typeof appRouter;
