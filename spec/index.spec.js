const {calculateProbabilities} = require('../helper');

describe('index.js tests', () => {
  it('calculateProbabilities function should return an array of probabilities', () => {
    const probabilities = calculateProbabilities();
    expect(Array.isArray(probabilities)).toBe(true);
    expect(probabilities.length).toBe(94); // From 6 to 99 inclusive is 94 numbers
    probabilities.forEach(probability => {
      expect(typeof probability).toBe('string'); // to fixed converts to strings
      const probNum = parseFloat(probability);
      expect(probNum).toBeGreaterThanOrEqual(0);
      expect(probNum).toBeLessThanOrEqual(1);
    });
  });
});