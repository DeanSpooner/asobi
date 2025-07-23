import { numberRange } from './number';
import { describe, expect, it } from 'vitest';

describe('numberRange', () => {
  it('should handle correct arrays of ascending amounts', () => {
    expect(numberRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(numberRange(101, 105)).toEqual([101, 102, 103, 104, 105]);
  });

  it('should handle ascending negative numbers', () => {
    expect(numberRange(-5, -1)).toEqual([-5, -4, -3, -2, -1]);
    expect(numberRange(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
  });

  it('should handle correct arrays of descending amounts', () => {
    expect(numberRange(5, 1)).toEqual([5, 4, 3, 2, 1]);
    expect(numberRange(105, 101)).toEqual([105, 104, 103, 102, 101]);
  });

  it('should handle descending negative numbers', () => {
    expect(numberRange(-1, -5)).toEqual([-1, -2, -3, -4, -5]);
    expect(numberRange(2, -2)).toEqual([2, 1, 0, -1, -2]);
  });

  it('should handle where the start and end numbers are the same', () => {
    expect(numberRange(3, 3)).toEqual([3]);
    expect(numberRange(0, 0)).toEqual([0]);
  });
});
