/*
Programação Dinâmica: https://www.youtube.com/watch?v=GiNPe_678Ms&t=1s
*/

function BubbleSort(arr) {
  let totalLength = arr.length;
  for (let i = 0; i < totalLength; i++) {
    for (let j = 0; j < totalLength; j++) {
      if (arr[j] > arr[j + 1]) {
        switchPositions(j);
      }
    }
  }

  function switchPositions(j) {
    let aux = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = aux;
  }
}

let unorder = [3, 2, 4, 6, 1, 5, 7, 8, 10, 9];
let reverse = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let repeated = [10, 10, 9, 9, 9, 5, 1, 5, 2, 4];

BubbleSort(unorder);
console.log(unorder);
console.log(
  "*******************************************************************"
);
BubbleSort(reverse);
console.log(reverse);
console.log(
  "*******************************************************************"
);
BubbleSort(repeated);
console.log(repeated);
