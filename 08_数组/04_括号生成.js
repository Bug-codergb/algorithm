var generateParenthesis = function(n) {
  let len = n * 2;
  let del = ["(", ")"];
  let res = [];
  let init = "";
  for (let i = 0; i < len; i++){
    if (i < len / 2) {
      init += del[0];
    } else {
      init+=del[1]
    }
  }
  let half = n;
  init = init.split("")
  for (let i = half ; i >= 0; i--){
    let temp = init[i];
    init[i] = init[i - 1];
    init[i - 1] = temp;
    break;
  }
  console.log(init.join(""));
};
console.log(generateParenthesis(3))

/**
 * 0,1,2,3,4,5,6,7
 * (,(,(,(,),),),)    0 1 2 3 4 5 6 7  
 * 1,2                ( ) ( ) ( ) ( ) no 
 * 1,3                ( ( ) ) ( ) ( ) no1 
 * 1,4                ( ( ) ) ( ) ( ) no 2
 * 1,5                ( ) ( ( ) ) ( ) no 3
 *                    ( ) ( ( ) ) ( ) no 4
 *                    ( ) ( ) ( ( ) ) no 5
 * 1,6,               ( ) ( ) ( ( ) ) no 6
 * 2,3                ( ( ) ) ( ) ( ) no - 
 * 2,4                ( ( ) ( ) ) ( ) no -
 * 2,4                ( ( ) ( ) ( ) ) no - 
 * 2,4                ( ( ) ( ) ) ( ) no - 
 * 2,4                ( ( ) ( ) ( ) ) no - 
 * 2,4                ( ) ( ) ( ) ( ) no 
 * 2,4                ( ) ( ) ( ) ( ) no 
 * 2,4                ( ) ( ) ( ) ( ) no 
 * 2,4                ( ) ( ) ( ) ( ) no 
 * 2,5
 * 2,6
 * 3,4
 * 3,5
 * 3,6
 * 4,5
 * 4,6
 * 5,6
 * 
 * 
 * 
 */