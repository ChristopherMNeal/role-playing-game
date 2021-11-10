import Character from '../src/js/character.js';

describe ('Character', () => {
  let character1;
  let character2;
  let character3;
  let character4;

  beforeEach(() => {
    character1 = new Character('jock', 'strength', 30);
    character2 = new Character('nerd', 'robots', 10);
    character3 = new Character('criminal', 'switchblade', 30);
    character4 = new Character('artsy', 'intelligence', 20);
  });

  test('should correctly create two characters using given characteristics', () => {
    expect(character1.type).toEqual('jock');
    expect(character1.skill).toEqual('strength');
    expect(character1.hp).toEqual(30);
  });
  test('Should return a winner at random for two equally matched (by HP) characters', () => {
    let fightResult = character1.fight(character3);
    expect([true, false]).toContain(fightResult);
  });
});
