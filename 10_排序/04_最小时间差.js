function bubleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n-1; i++){
    for (let j = 0; j < n - i - 1; j++){
      let next = arr[j + 1];
      let cur = arr[j];
      let next_first = Number(next.substring(0, 2));
      let next_second = Number(next.substring(3));
      
      let cur_first = Number(cur.substring(0, 2));
      let cur_second = Number(cur.substring(3));
      if (next_first <cur_first || next_second < cur_second ) {
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
function getMinute(t) {
  let t_first = Number(t.substring(0, 2));
  let t_second = Number(t.substring(3));
  return t_first+(t_second/60)
}
function getMinuteDiff(t1,t2) {
  return getMinute(t2) - getMinute(t1);
}
var findMinDifference = function (timePoints) {
  bubleSort(timePoints);
  
  const diff = getMinuteDiff(timePoints[0], timePoints[1])
  return diff;
};
let timePoints = ["00:00", "23:59"];
console.log(findMinDifference(timePoints))