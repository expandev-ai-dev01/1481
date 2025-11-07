/**
 * @utility validatePhone
 * @summary Validates Brazilian phone number format
 * @domain core
 * @type utility-function
 * @category validation
 */
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/;
  return phoneRegex.test(phone);
};
