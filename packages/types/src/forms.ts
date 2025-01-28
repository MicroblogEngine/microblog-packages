export type VerificationForm = {
  userId: string;
  token: string;
};

export type LoginForm = {
  username: string;
  password: string;
};

export type SignupDetailsForm = {
  name: string;
  birthDate: Date;
};

export type SignupUserForm = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export type SignupForm = SignupUserForm & SignupDetailsForm;

export type ForgotPasswordForm = {
  email: string;
};

export type ResetPasswordForm = {
  userId: string;
  token: string;
  password: string;
  confirmPassword: string;
};
