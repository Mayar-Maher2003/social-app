 import * as z from "zod";

 
 // schema and regex data
 export const loginSchema = z
    .object({
   
      email: z
        .string()
        .nonempty("Invalid email")
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/),
     
      password: z
        .string()
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password must be at least 8 characters, include upper & lower case, number and special character",
        ),
     
    });