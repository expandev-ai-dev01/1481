/**
 * @summary
 * Utility function to create standardized error responses.
 *
 * @module utils/response/errorResponse
 */

/**
 * @interface ErrorResponse
 * @description Standard error response structure
 *
 * @property {boolean} success - Always false for errors
 * @property {object} error - Error details
 * @property {string} error.code - Error code identifier
 * @property {string} error.message - Human-readable error message
 * @property {any} error.details - Additional error details (optional)
 * @property {string} timestamp - ISO timestamp of error occurrence
 */
export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @summary
 * Creates a standardized error response object
 *
 * @function errorResponse
 *
 * @param {string} message - Error message
 * @param {string} code - Error code identifier
 * @param {any} details - Additional error details
 *
 * @returns {ErrorResponse} Formatted error response
 *
 * @example
 * const error = errorResponse('Invalid input', 'VALIDATION_ERROR', { field: 'email' });
 * res.status(400).json(error);
 */
export function errorResponse(
  message: string,
  code: string = 'ERROR',
  details?: any
): ErrorResponse {
  return {
    success: false,
    error: {
      code,
      message,
      ...(details && { details }),
    },
    timestamp: new Date().toISOString(),
  };
}
