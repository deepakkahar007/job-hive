import { HashPassword } from "../lib/utils";
import { OutputRegisterSchema, RegisterUserSchema } from "../schema/zod";
import { router, publicProcedure } from "../trpc";
import { z } from "zod";

const UserRouter = router({
  register: publicProcedure
    // .input(RegisterUserSchema)
    // .output(OutputRegisterSchema)
    .query(({ input }) => {
      const data = {
        name: "john",
        email: "john@co.com",
        password: HashPassword("hello"),
        role: "back-end-developer",
      };

      if (!RegisterUserSchema.safeParse(data)) {
        return { status: false };
      }
      return { status: true };
    }),
});

export default UserRouter;
