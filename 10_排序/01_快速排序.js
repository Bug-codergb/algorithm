function quickSort(s,left,right){
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
let arr = [3, 5, 1, 2, 7, 88, 6, 34];
quickSort(arr,0,arr.length-1);
console.log(arr);