import { adminProcedure } from "../middleware";
import { router } from "../trpc";
import { CreateJobSchema, createJobOutputSchema } from "../schema/zod";

const JobRoutes = router({
  createJob: adminProcedure
    .input(CreateJobSchema)
    .output(createJobOutputSchema)
    .query(({ input, ctx }) => {
      return { success: true, msg: "successfully created" };
    }),
});
