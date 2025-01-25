import { z } from "zod";

export const VerifyPasswordFormSchema = z.object({
  token: z
    .string({ required_error: "Code required" })
    .min(8, "Code must have exactly 8 alphanumeric characters")
    .max(8, "Code must have exactly 8 alphanumeric characters"),
});

export const LoginFormSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .min(1, "Username is required"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const SignupFormSchema = z
  .object({
    username: z
      .string({ required_error: "Username is required" })
      .min(1, "Username is required"),
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email"),
    password: z
      .string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    confirmPassword: z
      .string({ required_error: "Password confirmation is required" })
      .min(1, "Password confirmation is required")
      .min(8, "Password confirmation must be more than 8 characters")
      .max(32, "Password confirmation must be less than 32 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and its confirmation doesn't match",
    path: ["confirmPassword"],
  });

export const ForgotPasswordFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email"),
});

export const ResetPasswordFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  confirmPassword: z
    .string({ required_error: "Password confirmation is required" })
    .min(1, "Password confirmation is required")
    .min(8, "Password confirmation must be more than 8 characters")
    .max(32, "Password confirmation must be less than 32 characters"),
  token: z.string({ required_error: "Code required" })
    .min(8, "Code must have exactly 8 alphanumeric characters")
    .max(8, "Code must have exactly 8 alphanumeric characters"),    
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Password and its confirmation doesn't match",
  path: ["confirmPassword"],
});

