function mergeArray(arr1,arr2) {
  const l1 = arr1;
  const l2 = arr2;
  let i = 0,j=0;
  let res=[]
  while (l1[i] !== undefined && l2[j] !== undefined) {
    if (l1[i] < l2[j]) {
      res.push(l1[i]);
      i++;
    } else {
      res.push(l2[j]);
      j++;
    }
  }
  if (l1[i]) {
    for (let k = i; k < l1.length; k++){
      res.push(l1[k])
    }
  }
  if (l2[j]) {
    for (let k = j; k < l2.length; k++){
      res.push(l2[k])
    }
  }
  return res;
}
const arr1 = [1, 3, 5, 7, 88, 99, 100];
const arr2 = [2, 3, 3, 4, 6, 8, 9, 10, 88, 90, 101]
console.log(mergeArray(arr1, arr2));