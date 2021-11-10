import {diceRoll} from '../src/js/game-play.js';
import { fight } from '../src/js/game-play';
import { character1 } from '../src/js/character';
import { character2 } from '../src/js/character';
import { character3 } from '../src/js/character';

describe ('diceRoll', () => {
  test('Should return a number between 1 and 20', () => {
    const result = diceRoll();
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(20);
  });
});

describe ('fight', () => {
  test('Should return a minimum winning roll based on character hps', () => {
    // const character1 = new Character('jock', 'strength', 30);
    // const character3 = new Character('criminal', 'switchblade', 30);
    const minimumWinningRollResult = fight(character1, character3);
    const minimumWinningRollResult2 = fight(character1, character2);
    expect(minimumWinningRollResult).toBe(10);
    expect(minimumWinningRollResult2).toBe(5);
  });
});