 import * as z from "zod";

 
 // schema and regex data
 export const registerSchema = z
    .object({
      name: z
        .string()
        .nonempty("name is required")
        .min(3, "Name must be at least 3 characters"),
      username: z.string().min(1, "Username is required"),
      email: z
        .string()
        .nonempty("Invalid email")
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/),
      dateOfBirth: z
        .string()
        .min(1, "Date of birth is required")
        .refine((data) => {
          let currentYear = new Date().getFullYear();
          let selectedYear = new Date(data).getFullYear();

          let age = currentYear - selectedYear;
          return age >= 18;
        }, "Age is not Allowed less than 18 years old "),

      gender: z.string().min(1, "Gender is required"),
      password: z
        .string()
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password must be at least 8 characters, include upper & lower case, number and special character",
        ),
      rePassword: z.string(),
    })
    .refine((data) => data.password === data.rePassword, {
      message: "password isn't match",
      path: ["rePassword"],
    });