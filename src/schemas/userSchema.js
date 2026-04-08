import { z } from "zod"

export const userSchema = z.object({
    firstName: z.string().trim().min(3, "Min 3 characters needed"),
    lastName: z.string().trim().min(3, "Min 3 characters needed"),
    email: z.string().email("Invalid email").toLowerCase(),
    age: z.coerce.number().int().min(1, "Age must be greater than 0"), // .int() ensures no decimals
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must match"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export const planSchema = z.object({
    name: z.string().min(3, "Must be at least 3 chars"),
    price: z.number().min(1, "Must be greater than 1")
})


