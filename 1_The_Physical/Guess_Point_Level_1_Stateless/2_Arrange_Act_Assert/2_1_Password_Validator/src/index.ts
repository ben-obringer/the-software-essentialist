interface ValidationResponse {
  valid: boolean;
  errors: string[];
}
export const validatePassword = (password: string): ValidationResponse => {
  if (password.length < 5 || password.length > 15) {
    return {
      valid: false,
      errors: ["Password must be between 5 and 15 characters"],
    };
  }
  if (!/\d/.test(password)) {
    return {
      valid: false,
      errors: ["Password must contain at least one digit"],
    };
  }
  return {
    valid: true,
    errors: [],
  };
};
