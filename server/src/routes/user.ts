import { router, publicProcedure } from "../trpc";
import prisma from "../lib/prisma";

const UserRouter = router({
  hello: publicProcedure.query(() => {
    console.log("hello runned");
    return { id: 2, name: "deepak" };
  }),
});

export default UserRouter;
