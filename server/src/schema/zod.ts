import { z } from "zod";

export const RegisterUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.string(),
  skills: z.array(z.string()).optional(),
});

export const OutputRegisterSchema = z.object({
  status: z.boolean(),
});

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
