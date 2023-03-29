interface ValidationResponse {
  valid: boolean;
  errors: string[];
}
export const validatePassword = (password: string): ValidationResponse => {
  if (password.length < 5) {
    return {
      valid: false,
      errors: ["Password must be between 5 and 15 characters"],
    };
  }
  return {
    valid: true,
    errors: [],
  };
};
