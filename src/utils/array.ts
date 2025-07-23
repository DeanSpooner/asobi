type T = unknown;

/**
 * Returns an array of length passed in, each index filled with value.
 * Value can be any type. If a callback is passed in, is will be invoked once per element.
 */
export const filledArray = (value: T | (() => T), length: number) => {
  if (length < 0) {
    throw new Error("Array length must be non-negative.");
  }

  if (typeof value === "function") {
    return Array.from({ length }, () => (value as () => T)());
  }

  return Array.from({ length }, () => value);
};
