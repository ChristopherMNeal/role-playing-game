import { Character } from '../src/js/character.js';
// import { character1 } from '../src/js/character.js';

describe ('Character', () => {
  test('should correctly create two characters using given characteristics', () => {
    const character1 = new Character('jock', 'strength', 30);
    expect(character1.type).toEqual('jock');
    expect(character1.skill).toEqual('strength');
    expect(character1.hp).toEqual(30);
  });
  
  // test('Should return a winner at random for two equally matched (by HP) characters', () => {
  //   let fightResult = character1.fight(character3);
  //   expect([true, false]).toContain(fightResult);

  //   expect(fight) return [true, false]
  // });
  // test('Should return a number value for a characters skill', () => {
    
  // });
});
