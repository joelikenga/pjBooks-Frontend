import { z } from "zod";

export const userLoginSchema = z.object({
  email: z
    .string()
    .email()
    .trim()
    .toLowerCase()
    .refine((value) => value.indexOf("@") !== -1, {
      message: "Enter a valid email address",
    }),
  password: z
    .string()
});

export type userLoginSchema = z.infer <typeof userLoginSchema>