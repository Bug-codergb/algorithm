function bubleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n-1; i++){
    for (let j = 0; j < n - i-1; j++){
      if (arr[j+1] > arr[j]) {
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
let arr = [3, 5, 1, 2, 7, 88, 6, 34];
bubleSort(arr);
console.log(arr);