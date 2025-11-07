/**
 * @summary
 * Utility function to create standardized success responses.
 *
 * @module utils/response/successResponse
 */

/**
 * @interface SuccessResponse
 * @description Standard success response structure
 *
 * @property {boolean} success - Always true for successful responses
 * @property {T} data - Response data payload
 * @property {object} metadata - Optional metadata
 * @property {number} metadata.page - Current page number (for paginated responses)
 * @property {number} metadata.pageSize - Items per page (for paginated responses)
 * @property {number} metadata.total - Total items count (for paginated responses)
 * @property {string} metadata.timestamp - ISO timestamp of response
 */
export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

/**
 * @summary
 * Creates a standardized success response object
 *
 * @function successResponse
 *
 * @param {T} data - Response data payload
 * @param {object} metadata - Optional metadata for pagination
 *
 * @returns {SuccessResponse<T>} Formatted success response
 *
 * @example
 * const response = successResponse({ id: 1, name: 'John' });
 * res.json(response);
 */
export function successResponse<T>(
  data: T,
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
  }
): SuccessResponse<T> {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString(),
    },
  };
}
