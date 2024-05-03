import { z } from "zod";
import { Gender, } from "./enums";

export const userSignUpSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .toLowerCase()
      .min(1, { message: "Firstname field is empty" }),
    lastName: z
      .string()
      .trim()
      .toLowerCase()
      .min(1, { message: "Lastname field is empty" }),
    email: z
      .string()
      .email()
      .trim()
      .toLowerCase()
      .refine((value) => value.indexOf("@") !== -1, {
        message: "Enter a valid email address",
      }),
    gender:  z.enum([Gender.Male, Gender.Female, Gender.Other]),
    password: z
      .string()
      .min(6, { message: "password length must not be greater than 6" })
      .max(16, { message: "password length cant exceed max 16" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
        message:
          "Password must contain at least one lowercase letter, one uppercase letter, and one number",
      }),
    confirmPassword: z.string(),
    phoneNumber: z
      .string()
      .min(10, { message: "incorrect number" })
      .regex(/^[0-9]+$/, { message: "only numbers are allowed" })
      .transform(
        (val) => `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6)}`
      ),
      countryCode: z.string(),
    dateOfBirth: z.date(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
export type userSignUp = z.infer<typeof userSignUpSchema>;
