import { z } from "zod"

export const authSchema = z.object({
    username: z
    .string()
    .min(1, "Username is required")
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username cannot exceed 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
    email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid Email Formate!"),
    password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password must be no more than 32 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&#]/, "Password must contain at least one special character"),
})

export type AuthSchema = z.infer<typeof authSchema>;