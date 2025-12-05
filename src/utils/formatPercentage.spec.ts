import { describe, it, expect } from 'vitest';

import { formatPercentage } from '@/utils/formatPercentage';

describe('formatPercentage', () => {
  it('should format a whole number to 1 decimal place', () => {
    expect(formatPercentage(10)).toBe('10.0');
    expect(formatPercentage(5)).toBe('5.0');
  });

  it('should format a float to 1 decimal place', () => {
    expect(formatPercentage(10.1)).toBe('10.1');
    expect(formatPercentage(3.14159)).toBe('3.1');
  });

  it('should round correctly', () => {
    expect(formatPercentage(10.15)).toBe('10.2'); // Rounds up
    expect(formatPercentage(10.14)).toBe('10.1'); // Rounds down
  });

  it('should return "0.0" for 0', () => {
    expect(formatPercentage(0)).toBe('0.0');
  });

  it('should return "0.0" for undefined', () => {
    expect(formatPercentage(undefined)).toBe('0.0');
  });

  it('should return "0.0" for null', () => {
    expect(formatPercentage(null)).toBe('0.0');
  });
});
