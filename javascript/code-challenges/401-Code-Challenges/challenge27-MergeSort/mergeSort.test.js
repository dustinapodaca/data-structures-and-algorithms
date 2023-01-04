'use strict';

const { mergeSort } = require('./mergeSort.js');

describe('Merge Sort', () => {
  it('sorts array in ascending order', () => {
    const arr = [8, 4, 23, 42, 16, 15];
    mergeSort(arr);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
