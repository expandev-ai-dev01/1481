/**
 * @utility validateEmail
 * @summary Validates email format
 * @domain core
 * @type utility-function
 * @category validation
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
