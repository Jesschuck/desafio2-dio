function victoriesDefeatsDifference(victories, defeats) {
  let calculate = victories - defeats;
  return calculate;
}

function calculateRank(victories, defeats) {
  let resultRank = victoriesDefeatsDifference(victories, defeats);
  let level = "";

  if (resultRank <= 10) {
    level = "Ferro";
  } else if (resultRank <= 20) {
    level = "Bronze";
  } else if (resultRank <= 50) {
    level = "Prata";
  } else if (resultRank <= 80) {
    level = "Ouro";
  } else if (resultRank <= 90) {
    level = "Diamante";
  } else if (resultRank <= 100) {
    level = "Lendário";
  } else {
    level = "Imortal";
  }

  return `O Herói tem um saldo de ${resultRank} e está no nível de ${level}`;
}

console.log(calculateRank(60, 20));


