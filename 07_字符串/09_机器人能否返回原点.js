var judgeCircle = function (moves) {
  let x = 0, y = 0;
  for (let item of moves) {
    switch (item) {
      case "D": y--; break;
      case "R": x++; break;
      case "U": y++; break;
      case "L": x--; break;
    }
  }
  return x === 0 && y === 0;
};
let moves = "DRUULD";
console.log(judgeCircle(moves));