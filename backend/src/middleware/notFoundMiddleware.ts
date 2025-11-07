/**
 * @summary
 * Middleware to handle 404 Not Found errors for undefined routes.
 *
 * @module middleware/notFoundMiddleware
 */

import { Request, Response } from 'express';

/**
 * @summary
 * Handles requests to undefined routes
 *
 * @function notFoundMiddleware
 *
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 *
 * @returns {void}
 */
export function notFoundMiddleware(req: Request, res: Response): void {
  res.status(404).json({
    success: false,
    error: {
      code: 'NOT_FOUND',
      message: `Route ${req.method} ${req.path} not found`,
      path: req.path,
      method: req.method,
    },
    timestamp: new Date().toISOString(),
  });
}
