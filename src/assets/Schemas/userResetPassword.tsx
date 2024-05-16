import { z } from "zod";

export const userResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "password length must not be greater than 6" })
      .max(16, { message: "password length cant exceed max 16" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
        message:
          "Password must contain at least one lowercase letter, one uppercase letter, and one number",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
export type userResetPassword = z.infer<typeof userResetPasswordSchema>;
