function constructorMap() {
  let m = new Map([
    ['A',1],
    ['B',2],
    ['C',3],
    ['D',4],
    ['E',5],
    ['F',6],
    ['G',7],
    ['H',8],
    ['I',9],
    ['J',10],
    ['K',11],
    ['L',12],
    ['M',13],
    ['N',14],
    ['O',15],
    ['P',16],
    ['Q',17],
    ['R',18],
    ['S',19],
    ['T',20],
    ['U',21],
    ['V',22],
    ['W',23],
    ['X',24],
    ['Y',25],
    ['Z',26],
  ])
  return m;
}
var titleToNumber = function (columnTitle) {
  const diff = 26;
  let sum = 0;
  let mul=1;
  const map = constructorMap();
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const k = columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1;
    sum = sum + k * mul;
    mul*=diff
  }
  return sum;
};
console.log(titleToNumber("AB"))