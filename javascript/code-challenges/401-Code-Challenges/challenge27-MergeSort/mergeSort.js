'use strict';

let arr = [8, 4, 23, 42, 16, 15];

const mergeSort = (arr) => {
  let n = arr.length;

  if (n > 1) {
    let mid = n / 2;
    // console.log('mergeMid', mid);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    console.log('mergeSortLeft:', left);
    console.log('mergeSortRight:', right);

    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
    console.log('mergeSortArr:', arr);
  }
};

const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      // console.log('arr[k] IF', arr[k]);
      i = i + 1;
    } else {
      arr[k] = right[j];
      // console.log('arr[k] ELSE', arr[k]);
      j = j + 1;
    }
    k = k + 1;
    console.log('mergeWhile < left && right:', arr);
  }

  while (i < left.length) {
    arr[k] = left[i];
    // console.log('arr[k] WHILE I <', arr[k]);
    i = i + 1;
    k = k + 1;
    console.log('mergeWhile < left:', arr);
  }

  while (j < right.length) {
    arr[k] = right[j];
    // console.log('arr[k] WHILE J <', arr[k]);
    j = j + 1;
    k = k + 1;
    console.log('mergeWhile < right:', arr);
  }
  console.log('mergeArr', arr);
};

mergeSort(arr);
console.log('finalResultArr:', arr);

module.exports.mergeSort = mergeSort;
