'use strict';

let arr = [8, 4, 23, 42, 16, 15];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    console.log('J', j);
    let temp = arr[i];
    console.log('temp', temp);

    console.log('arrOuterLoop', arr);
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      console.log('arr[j]', arr[j]);
      j = j - 1;
    }
    arr[j + 1] = temp;
    console.log('arr[j + 1]', arr[j + 1]);
    console.log('newTemp', temp);
    console.log('arrInnerLoop', arr);
  }
};

insertionSort(arr);
console.log(arr);

module.exports.insertionSort = insertionSort;

