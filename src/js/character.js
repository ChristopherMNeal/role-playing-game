export default class Character {
  constructor(type, skill, hp) {
    this.type = type;
    this.skill = skill;
    this.hp = hp;
  }
  fight(character2) {
    let instigatorWinner = (Math.floor(Math.random()) * 20) +1;
    if (instigatorWinner > 10) {
      return true;
    } else {
      return false;
    }
  }
}
