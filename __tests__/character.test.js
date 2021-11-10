import Character from '../src/js/character.js';

describe ('Character', () => {
  let character1;
  let character2;

  beforeEach(() => {
    character1 = new Character('jock', 'strength');
    character2 = new Character('nerd', 'robots');
  });

  test('should correctly create two characters using given characteristics', () => {
    expect(character1.type).toEqual('jock');
    expect(character1.skill).toEqual('strength');
  });
});