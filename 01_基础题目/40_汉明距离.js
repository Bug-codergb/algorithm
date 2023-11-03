var hammingDistance = function(x, y) {
  x = x.toString(2);
  y = y.toString(2);
  
  let diff = Math.abs(x.length - y.length);

  if (x.length < y.length) {
    while (diff--) {
      x = `0${x}`;
    }
  }
  if (y.length < x.length) {
    while (diff--) {
      y = `0${y}`;
    }
  }
  let ret = 0
  for (let i = 0; i < x.length; i++){
    if (x.charAt(i) !== y.charAt(i)) {
      ret++;
    }
  }
  console.log("A".charCodeAt(0))
  return ret;
};
console.log(hammingDistance(1,4))