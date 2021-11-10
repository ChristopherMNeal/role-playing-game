import Character from '../src/js/character.js';

describe ('Character', () => {
  let character1;
  let character2;
  let character3;
  let character4;

  beforeEach(() => {
    character1 = new Character('jock', 'strength', 'thier parent');
    character2 = new Character('nerd', 'robots', 'jock');
    character3 = new Character('criminal', 'switchblade', 'authority figure');
    character4 = new Character('artsy', 'intelligence', 'jock');
  });

  test('should correctly create two characters using given characteristics', () => {
    expect(character1.type).toEqual('jock');
    expect(character1.skill).toEqual('strength');
  });
});