var calPoints = function(operations) {
  let ret = [];
  for (let item of operations) {
    switch (item) {
      case "D":
        ret.push(ret[ret.length - 1] * 2); break;
      case "C":
        ret.pop(); break;
      case "+":
        ret.push((ret[ret.length - 1] ?? 0) + (ret[ret.length - 2] ?? 0));break;
      default:
        ret.push(Number(item))
    }
  }
  return ret.reduce((prev, next) => prev + next);
};
let ops = ["5", "2", "C", "D", "+"];
console.log(calPoints(ops));
