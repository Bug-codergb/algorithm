var maxArea = function(height) {
  if (height < 2) return 0;
  let leftIndex = 0, rightIndex = height.length - 1;
  let maxArea = 0;
  while (leftIndex <= rightIndex) {
    let area = (rightIndex - leftIndex) * Math.min(height[leftIndex], height[rightIndex]);
    maxArea = Math.max(maxArea, area);
    if (height[leftIndex] < height[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }
  return maxArea;
};
let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(arr));