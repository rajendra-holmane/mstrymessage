import { z } from 'zod';

export const usernameValidation = z
    .string()
    .min(2, "Username must be 2 character")
    .max(20, "Username must be no more than 20 characters")
    .regex(/^[a-zA-Z0-9_-]+$/, "Username must not contain special characters")

export const signupSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6, "Password must be atleast 6 characters")
})    