/*
Programação dinâmica: https://www.youtube.com/watch?v=S5no2qT8_xg
Mosh Hamedani Explanation: https://www.youtube.com/watch?v=uJLwnsLn0_Q
*/

function InsertionSort(arr) {
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    let current = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
}

let unorder = [3, 2, 4, 6, 1, 5, 7, 8, 10, 9];
InsertionSort(unorder);
console.log(unorder);
console.log(
  "*******************************************************************"
);
let reverse = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
InsertionSort(reverse);
console.log(reverse);
console.log(
  "*******************************************************************"
);
let repeated = [10, 10, 9, 9, 9, 5, 1, 5, 2, 4];
InsertionSort(repeated);
console.log(repeated);
