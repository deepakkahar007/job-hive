import { adminProcedure } from "../middleware";
import { router } from "../trpc";
import { CreateJobSchema, createJobOutputSchema } from "../schema/zod";
import { z } from "zod";

const JobRoutes = router({
  createJob: adminProcedure
    .input(CreateJobSchema)
    .output(createJobOutputSchema)
    .query(() => {
      return { success: true, msg: "successfully created" };
    }),
});
