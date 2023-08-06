var convertToTitle = function(columnNumber) {
  let letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let map = new Map();
  for (let i = 1; i <= 26; i++){
    map.set(letter[i-1], i);
  }
  
};
convertToTitle(2);