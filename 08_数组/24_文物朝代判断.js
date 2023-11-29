var checkDynasty = function(places) {
  let slowIndex = 0;
  let fastIndex = 0;
  let len = places.length;
  while (fastIndex < len) {
    if (places[slowIndex] !== 0) {
      slowIndex++;
    }
    let temp = places[fastIndex];
    places[fastIndex] = places[slowIndex];
    places[slowIndex] = temp;

    fastIndex++;
  }
  let i = 0;
  while (places[i] !== 0) {
    let j = i + 1;
    
  }
  return places;
};
let places = [0,0,6,0,0,1,0,9, 0, 7,0,0];
console.log(checkDynasty(places));