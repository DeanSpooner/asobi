/**
 *  Utility function to select a random integer between (and inclusive of) min and max.
 */
export const getRandomInteger = (min: number, max: number) => {
  if (min > max) {
    throw new Error("min cannot be larger than max in getRandomInteger.");
  }

  const diff = max - min;

  // (diff + 1) * Math.random: if diff was 3, this would return something between 0 and 3.99999...
  // After Math.floor, integerToAddToMin would be:
  // 0 - 0.99.. -> 0, (1/4 chance)
  // 1 - 1.99.. -> 1, (1/4 chance)
  // 2 - 2.99.. -> 2, (1/4 chance)
  // 3 - 3.99.. -> 3 (1/4 chance)
  const integerToAddToMin = Math.floor((diff + 1) * Math.random());

  return min + integerToAddToMin;
};
