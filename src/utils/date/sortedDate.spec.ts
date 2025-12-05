import { describe, it, expect } from 'vitest';

import { sortedDate } from '@/utils/date/sortedDate';

describe('SortedDate', () => {
  const originalDates = [
    new Date('2025-09-15T12:00:00'),
    new Date('2025-09-14T12:00:00'),
    new Date('2025-09-16T12:00:00'),
  ];
  const originalDatesAsc = [
    new Date('2025-09-14T12:00:00'),
    new Date('2025-09-15T12:00:00'),
    new Date('2025-09-16T12:00:00'),
  ];
  const originalDatesDesc = [
    new Date('2025-09-16T12:00:00'),
    new Date('2025-09-15T12:00:00'),
    new Date('2025-09-14T12:00:00'),
  ];

  it('sorts dates in ascending order by default', () => {
    const sorted = sortedDate(originalDates);

    expect(sorted).toEqual(originalDatesAsc);
  });

  it('sorts dates in ascending order when ascending is true', () => {
    const sorted = sortedDate(originalDates, true);

    expect(sorted).toEqual(originalDatesAsc);
  });

  it('sorts dates in descending order when ascending is false', () => {
    const sorted = sortedDate(originalDates, false);

    expect(sorted).toEqual(originalDatesDesc);
  });

  it('does not modify the original array', () => {
    const dates = [new Date('2025-09-15T12:00:00'), new Date('2025-09-14T12:00:00')];
    const copy = [...dates];

    sortedDate(dates);

    expect(dates).toEqual(copy);
  });

  it('handles empty array', () => {
    const dates: Date[] = [];
    const sorted = [...dates].sort((a, b) => a.getTime() - b.getTime());
    expect(sorted).toEqual([]);
  });

  it('handles array with one element', () => {
    const dates = [new Date('2025-09-15T12:00:00')];
    const sorted = sortedDate(dates);
    expect(sorted).toEqual(dates);
  });
});
