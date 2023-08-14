var reverseVowels = function (s) {
  s = s.split("");
  let left = 0, right = s.length - 1;
  let arr=['a','e','i','o','u','A','E','I','O','U'];
  while (left <= right) {
    if (s[left] === s[right]) {
      left++;
      right--;
      continue;
    }
    if (!arr.includes(s[left])) {
      left++;
    }
    if (!arr.includes(s[right])) {
      right--;
    }
    
    if (arr.includes(s[left]) && arr.includes(s[right])) {
      console.log(s[left], s[right]);
      let temp = s[left];
      s[left] = s[right];
      s[right] = temp;

      left++;
      right--;
    }
  }
  return s.join("");
};
console.log(reverseVowels("race a car"));