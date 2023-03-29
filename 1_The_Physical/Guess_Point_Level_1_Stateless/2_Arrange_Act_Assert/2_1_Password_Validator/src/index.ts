type ErrorMessage = string;
interface ValidationResponse {
  valid: boolean;
  errors: ErrorMessage[];
}

interface Rule {
  check: (password: string) => boolean;
  errorMessage: ErrorMessage;
}

export const validatePassword = (password: string): ValidationResponse => {
  const rules: Rule[] = [
    {
      check: (password: string) =>
        password.length >= 5 && password.length <= 15,
      errorMessage: "Password must be between 5 and 15 characters",
    },
    {
      check: (password: string) => /\d/.test(password),
      errorMessage: "Password must contain at least one digit",
    },
    {
      check: (password: string) => /[A-Z]/.test(password),
      errorMessage: "Password must contain at least one uppercase letter",
    },
  ];

  const errors = checkForErrors(password, rules);
  return {
    valid: errors.length === 0,
    errors,
  };
};

function checkForErrors(password: string, rules: Rule[]): ErrorMessage[] {
  const brokenRules = rules.filter((rule) => !rule.check(password));
  return brokenRules.map((rule) => rule.errorMessage);
}
