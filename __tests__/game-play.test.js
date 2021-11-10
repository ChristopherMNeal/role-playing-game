import {diceRoll} from '../src/js/game-play.js';

test('Should return a number between 1 and 20', () => {
  expect(diceRoll()).toBeGreaterThan(0);
  expect(diceRoll()).toBeLessThan(20);
});