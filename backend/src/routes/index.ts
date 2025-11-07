/**
 * @summary
 * Main API router with version management.
 * Routes all API requests to appropriate version-specific routers.
 *
 * @module routes
 */

import { Router } from 'express';
import v1Routes from './v1';

const router = Router();

/**
 * @remarks Version 1 routes (current stable)
 * All v1 endpoints are prefixed with /v1
 */
router.use('/v1', v1Routes);

/**
 * @remarks Future versions can be added here
 * Example: router.use('/v2', v2Routes);
 */

export default router;
