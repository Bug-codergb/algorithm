var longestPalindrome = function(s) {
  let m = new Map();
  for (let item of s) {
    m.set(item, (m.get(item)||0) + 1);
  }
  
  let len = 0, max = 0;
  let arr = [];
  m.forEach((value, key) => {
    if (value % 2 === 0) {
      len += value;
    } else if (value % 2 !== 0) {
      arr.push(value);
      if (value > max) {
        max = value;
      }
    }
  })
  let arrSum = 0;
  if (arr.length !== 0) {
    for (let i = 0; i < arr.length;i++) {
      arr[i] = arr[i] - 1;
    }
    arrSum = arr.reduce((prev, next) => {
      return prev + next;
    })
    max  = arrSum > max ? arrSum+1 : max;
  }
  
  return len + max;
};
let s = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
console.log(longestPalindrome(s));
/**
 * 
 */