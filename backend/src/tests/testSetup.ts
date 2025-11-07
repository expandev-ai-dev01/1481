/**
 * @summary
 * Global test environment setup and configuration.
 * Provides shared test utilities and initialization.
 *
 * @module tests/testSetup
 */

/**
 * @remarks Test environment configuration
 */
process.env.NODE_ENV = 'test';
process.env.PORT = '3001';

/**
 * @remarks Global test utilities can be added here
 */
export const testConfig = {
  timeout: 5000,
  retries: 2,
};

/**
 * @remarks Setup function to run before all tests
 */
export function setupTests(): void {
  console.log('Test environment initialized');
}

/**
 * @remarks Cleanup function to run after all tests
 */
export function teardownTests(): void {
  console.log('Test environment cleaned up');
}
