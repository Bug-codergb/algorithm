function getCount(str) {
  let m = new Map();
  for (let item of str) {
    m.set(item, (m.get(item) || 0) + 1);
  }
  return m;
}
var minNumBooths = function (demand) {
  let str = 0;
  let demandStr = demand.join("");
  let s = new Set(demandStr);
  let finalStr = "";
  for (let item of s) {
    finalStr += item;
  }

  let obj = {};
  for (let item of finalStr) {
    obj[item] = 0;
  }
  for (let i = 0; i < demand.length;i++) {
    const item = demand[i];
    const m = getCount(item);
    for (let s of finalStr) {
      let count = m.get(s)??0;
      if (count > obj[s]) {
        obj[s] = count;
      }
    }
  }

  for (const key in obj) {
    str += obj[key];
  }
  return str;
};
let demand = ["acd", "bed", "accd"];
console.log(minNumBooths(demand));