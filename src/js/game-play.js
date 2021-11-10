export function diceRoll() {
  return (Math.floor(Math.random()) * 20) +1;
}

export function fight(instigator, instigatee) {
  let minimumWinningRoll = 0;
  minimumWinningRoll = Math.floor(instigatee.hp/(instigator.hp + instigatee.hp)*20);
  
  if (instigator.skill === ('switchblade')) {
    minimumWinningRoll -= 2;
  } else if (instigator.skill === ('strength')) {
    minimumWinningRoll -= 3;
  } else if (instigator.skill === ('robots')) {
    minimumWinningRoll -= 5;
  } else if (instigator.skill === ('intelligence')) {
    minimumWinningRoll -= 3;
  } else { 
    minimumWinningRoll;
  }

  if (instigatee.skill === ('switchblade')) {
    minimumWinningRoll += 2;
  } else if (instigatee.skill === ('strength')) {
    minimumWinningRoll += 3;
  } else if (instigatee.skill === ('robots')) {
    minimumWinningRoll += 5;
  } else if (instigatee.skill === ('intelligence')) {
    minimumWinningRoll += 3;
  } else {
    minimumWinningRoll;
  }
  return minimumWinningRoll;
}