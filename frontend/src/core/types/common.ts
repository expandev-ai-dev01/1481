/**
 * @types Common
 * @summary Common type definitions used across the application
 * @domain core
 * @category types
 */

export type ID = string | number;

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

export interface SelectOption {
  value: string | number;
  label: string;
}
