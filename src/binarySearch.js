function binarySearch(t, arr) {
  const array = [].slice.call(arr).sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (t < array[mid]) {
      right = mid - 1;
    }

    if (t > array[mid]) {
      left = mid + 1;
    }

    if (t == array[mid]) return mid;
  }

  return -1;
}

function binarySearchRecursive(target, arr) {
  const array = [].slice.call(arr).sort((a, b) => a - b);
  return search(target, array, 0, array.length - 1);
}

function search(t, array, l, r) {
  if (r >= l) {
    let mid = Math.floor((r + l) / 2);

    if (t == array[mid]) return mid;

    if (t > array[mid]) return search(t, array, mid + 1, r);
    else return search(t, array, l, mid - 1);
  }

  return -1;
}

module.exports = { binarySearch, binarySearchRecursive };
