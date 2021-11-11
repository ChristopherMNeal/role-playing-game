import { character1, character2 } from "./character";

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

export function conclusion() {
  let rollResult = (diceRoll());
  const player1 = character1;
  const player2 = character2;
  console.log(rollResult);
  // const player1 = $("#player1form").val();
  // const player2 = $("#player2form").val();
  if (rollResult >= (fight(player1, player2))) {
    console.log("you win");
    return true;
  } else {
    console.log("you lose");
    return false;
  }
}