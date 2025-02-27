import { z } from "zod";

export const VerifyPasswordFormSchema = z.object({
  userId: z
  .string({ required_error: "User ID is required" })
  .uuid("Invalid user ID"),  
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

export const SignupDetailsFormSchema = z
  .object({
    name: z
      .string({ required_error: "Name is required" })
      .min(5, "Name must be more than 5 characters")
      .max(100, "Name must be less than 100 characters"),
    birthDate: z
      .coerce
      .date({ required_error: "Birth date is required" }),
  });

export const SignupUserFormSchema = z
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
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
      }),
    confirmPassword: z
      .string({ required_error: "Password confirmation is required" })
      .min(1, "Password confirmation is required")
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and its confirmation doesn't match",
    path: ["confirmPassword"],
  });

export const SignupFormSchema = SignupDetailsFormSchema.and(SignupUserFormSchema);

export const ForgotPasswordFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email"),
});

export const ResetPasswordFormSchema = z.object({
  userId: z
    .string({ required_error: "User ID is required" })
    .uuid("Invalid user ID"),
  token: z.string({ required_error: "Code required" })
    .min(8, "Code must have exactly 8 alphanumeric characters")
    .max(8, "Code must have exactly 8 alphanumeric characters"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
    }),
  confirmPassword: z
    .string({ required_error: "Password confirmation is required" })
    .min(1, "Password confirmation is required")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
    }),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Password and its confirmation doesn't match",
  path: ["confirmPassword"],
});

export const FeedFormSchema = z
  .object({
    text: z
      .string({ required_error: "Text is required" })
      .max(400, "Your post must be less than 400 characters"),
    profileId: z
      .string({ required_error: "Profile ID is required" })
      .uuid("Invalid profile ID"),
  });