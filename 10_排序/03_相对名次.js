function quickSort(s, left, right) {
  let l=left;
  let r=right;
  let midNum=s[Math.floor((l+r)/2)];
  let temp=0;
  while(l<r){
    while(midNum>s[l]){
      l+=1;
    }
    while(midNum<s[r]){
      r-=1;
    }
    if(l>=r) break;
    temp=s[l];
    s[l]=s[r];
    s[r]=temp;
    if(midNum===s[l]) r-=1;
    if(midNum===s[r]) l+=1;
  }
  if(l===r){
    l+=1;
    r-=1;
  }
  if(left<r) quickSort(s,left,r);
  if(l<right) quickSort(s,l,right);
}
var findRelativeRanks = function (score) {
  let arr = [...score];
  quickSort(score, 0, score.length - 1);
  for (let i = 0; i < score.length / 2; i++) {
    let temp = score[i];
    score[i] = score[score.length - 1 - i];
    score[score.length - 1 - i] = temp;
  }
  let obj = {};
  for (let i = 0; i < score.length; i++){
    if (i > 2) obj[score[i]] = i+1;
    else if(i===0) {
      obj[score[i]] = "Gold Medal";
    }else if(i===1) {
      obj[score[i]] = "Silver Medal";
    }else if(i===2) {
      obj[score[i]] = "Bronze Medal";
    }
  }
  let res = [];
  for (let item of arr) {
    res.push(obj[item])
  }
  return res
};
let score = [10, 3, 8, 9, 4];
console.log(findRelativeRanks(score));