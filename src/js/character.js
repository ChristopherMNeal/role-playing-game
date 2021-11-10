export class Character {
  constructor(type, skill, hp) {
    this.type = type;
    this.skill = skill;
    this.hp = hp;
  }
}

export const character0 = new Character('freshman', 'nothing', 20)
export const character1 = new Character('jock', 'strength', 30);
export const character2 = new Character('nerd', 'robots', 10);
export const character3 = new Character('criminal', 'switchblade', 30);
export const character4 = new Character('artsy', 'intelligence', 15);
