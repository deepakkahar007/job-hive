import { z } from "zod";

function add_Days() {
  const date = new Date();
  const result = date.setDate(date.getDate() + 5);
  return result;
}

export const CreateJobSchema = z.object({
  title: z.string(),
  desription: z.string(),
  required_Skill_Set: z.array(z.string()),
  company: z.string(),
  location: z.string(),
  salary: z.number(),
  website: z.string().optional(),
  last_Date: z.date(),
});

export const createJobOutputSchema = z.object({
  success: z.boolean().default(false),
  msg: z.string().default("success"),
});
