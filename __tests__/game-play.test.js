import {diceRoll} from '../src/js/game-play.js';
import { fight } from '../src/js/game-play';
import { Character } from '../src/js/character';

describe ('diceRoll', () => {
  test('Should return a number between 1 and 20', () => {
    const result = diceRoll();
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(20);
  });
});

describe ('fight', () => {
  test('Should return a minimum winning roll based on character hps', () => {
    const character1 = new Character('jock', '', 30);
    const character2 = new Character('nerd', '', 10);
    const character3 = new Character('criminal', '', 30);
    const minimumWinningRollResult = fight(character1, character3);
    const minimumWinningRollResult2 = fight(character1, character2);
    expect(minimumWinningRollResult).toBe(10);
    expect(minimumWinningRollResult2).toBe(5);
  });

  test('Should take switchblade into account of instigatorRoll', () => {
    const character0 = new Character ('freshman', 'nothing', 10);
    const character1 = new Character ('nerd', 'switchblade', 10);
    const character2 = new Character ('criminal', 'strength', 10);
    const character3 = new Character('jock', 'robots', 10);
    const character4 = new Character('artsy', 'intelligence', 10);

    const minimumWinningRollResult1a = fight(character1, character0);
    const minimumWinningRollResult2a = fight(character2, character0);
    const minimumWinningRollResult3a = fight(character3, character0);
    const minimumWinningRollResult4a = fight(character4, character0);
    const minimumWinningRollResult1b = fight(character0, character1);
    const minimumWinningRollResult2b = fight(character0, character2);
    const minimumWinningRollResult3b = fight(character0, character3);
    const minimumWinningRollResult4b = fight(character0, character4);

    expect(minimumWinningRollResult1a).toBe(8);
    expect(minimumWinningRollResult2a).toBe(7);
    expect(minimumWinningRollResult3a).toBe(5);
    expect(minimumWinningRollResult4a).toBe(7);

    expect(minimumWinningRollResult1b).toBe(12);
    expect(minimumWinningRollResult2b).toBe(13);
    expect(minimumWinningRollResult3b).toBe(15);
    expect(minimumWinningRollResult4b).toBe(13);
  });
});

