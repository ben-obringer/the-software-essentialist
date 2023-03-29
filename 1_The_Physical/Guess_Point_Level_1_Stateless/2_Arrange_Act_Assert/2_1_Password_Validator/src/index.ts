interface ValidationResponse {
  valid: boolean;
  errors: string[];
}

export const validatePassword = (password: string): ValidationResponse => {
  const errors = [];
  if (password.length < 5 || password.length > 15) {
    errors.push("Password must be between 5 and 15 characters");
  }
  if (!/\d/.test(password)) {
    errors.push("Password must contain at least one digit");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};
