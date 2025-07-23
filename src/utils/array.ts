import { randomIntegerSelector } from './number';

/**
 * Returns an array of length passed in, each index filled with value.
 * Value can be any type. If a callback is passed in, is will be invoked once per element.
 */
export const filledArray = <T>(value: T | (() => T), length: number) => {
  if (length < 0) {
    throw new Error('Array length must be non-negative.');
  }

  if (typeof value === 'function') {
    return Array.from({ length }, () => (value as () => T)());
  }

  return Array.from({ length }, () => value);
};

/**
 * Returns a random element from an array.
 */
export const getRandomFromArray = <T>(array: T[]) => {
  if (length < 1) {
    throw new Error('Array must contain at least one element.');
  }

  const selectedIndex = randomIntegerSelector(0, array.length - 1);

  return array[selectedIndex];
};
