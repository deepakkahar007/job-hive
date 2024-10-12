import { TRPCError } from "@trpc/server";
import { middleware, publicProcedure } from "./trpc";

const isAdminMiddleware = middleware(({ ctx, next }) => {
  console.log(ctx.isAdmin);

  //   if (!ctx.isAdmin) {
  //     throw new TRPCError({
  //       code: "UNAUTHORIZED",
  //       message: "you are not authenticated",
  //     });
  //   }
  return next({ ctx: { user: { id: 34, username: "admmin" } } });
});

export const adminProcedure = publicProcedure.use(isAdminMiddleware);
