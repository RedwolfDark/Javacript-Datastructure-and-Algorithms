const { binarySearch, binarySearchRecursive } = require("../src/binarySearch");
const { bubbleSort } = require("../src/bubbleSort");
const { insertionSort } = require("../src/insertionSort");

test("Testing Binary search algorithm", () => {
  let arr = [-1, 0, 4, 7, 3, 6, 10];
  expect(binarySearch(2, arr)).toBe(-1);
  expect(binarySearch(3, arr)).toBe(2);
});

test("Testing recursive Binary search algorithm", () => {
  let arr = [-1, 0, 4, 7, 3, 6, 10];
  expect(binarySearchRecursive(2, arr)).toBe(-1);
  expect(binarySearchRecursive(3, arr)).toBe(2);
});

test("Testing bubble sort algorithm", () => {
  let arr = [-1, 0, 4, 7, 3, 6, 10];
  let sorted = [-1, 0, 4, 7, 3, 6, 10].slice().sort((a, b) => a - b);
  expect(bubbleSort(arr)).toEqual(sorted);
});

test("Testing insertion sort algorithm", () => {
  let arr = [-1, 0, 4, 7, 3, 6, 10];
  let sorted = [-1, 0, 4, 7, 3, 6, 10].slice().sort((a, b) => a - b);
  expect(insertionSort(arr)).toEqual(sorted);
});
