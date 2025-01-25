export type VerificationForm = {
  userId: string;
  token: string;
};

export type LoginForm = {
  username: string;
  password: string;
};

export type SignupForm = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export type ForgotPasswordForm = {
  email: string;
};

export type ResetPasswordForm = {
  email: string;
  token: string;
  password: string;
  confirmPassword: string;
};
