/**
 * @summary
 * Reusable Zod validation schemas and utilities for common data types.
 *
 * @module utils/validation/zodValidation
 */

import { z } from 'zod';

/**
 * @remarks String validation helpers
 */
export const zString = z.string().min(1);
export const zNullableString = (maxLength?: number) => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema.nullable();
};

/**
 * @remarks Name validation (1-200 characters)
 */
export const zName = z.string().min(1).max(200);

/**
 * @remarks Description validation (max 500 characters, nullable)
 */
export const zNullableDescription = z.string().max(500).nullable();

/**
 * @remarks Email validation
 */
export const zEmail = z.string().email();

/**
 * @remarks Phone validation (basic pattern)
 */
export const zPhone = z.string().regex(/^\+?[1-9]\d{1,14}$/);

/**
 * @remarks Numeric validation helpers
 */
export const zPositiveInt = z.number().int().positive();
export const zNonNegativeInt = z.number().int().min(0);
export const zFK = z.number().int().positive();
export const zNullableFK = z.number().int().positive().nullable();

/**
 * @remarks Boolean validation (BIT representation)
 */
export const zBit = z.union([z.literal(0), z.literal(1)]);

/**
 * @remarks Date validation helpers
 */
export const zDateString = z.string().datetime();
export const zDate = z.coerce.date();

/**
 * @remarks Decimal validation (15,2 precision)
 */
export const zDecimal = z.number();

/**
 * @remarks Price validation (18,6 precision)
 */
export const zPrice = z.number().min(0);
