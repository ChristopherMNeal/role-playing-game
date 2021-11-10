export function diceRoll() {
  return (Math.floor(Math.random()) * 20) +1;
}

export function fight(instigator, instigatee) {
  // let instigatorRoll = diceRoll()
  let minimumWinningRoll = 0;
  // minimumWinningRoll = Math.floor(instigatee.hp/(instigator.hp + instigatee.hp)*20);
  return minimumWinningRoll;

  // if (instigator.includes(switchblade)) {
  //   instigatorRoll += 2
  // } else if (instigator.includes(strength)) {
  //   instigatorRoll += 3
  // } else if (instigator.includes(robots)) {
  //   instigatorRoll += 5
  // } else if (instigator.includes(intelligence)) {
  //   instigatorRoll += 3
  // } else { 
  //   instigatorRoll;
  // }

  // if (instigatee.includes(switchblade)) {
  //   minimumWinningRoll += 2
  // } else if (instigatee.includes(strength)) {
  //   minimumWinningRoll += 3
  // } else if (instigatee.includes(robots)) {
  //   minimumWinningRoll += 5
  // } else if (instigatee.includes(intelligence)) {
  //   minimumWinningRoll += 3
  // } else {
  //   minimumWinningRoll;
  // }
}