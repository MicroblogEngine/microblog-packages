export type RequestPathProps = {
  params?: Promise<{ id: string }>
}

export type ApiError = {
  errors: {
    [key: string]: string[];
  };
};

export type UserApiError = {
  user: {
    id: string;
  };
} & ApiError;
