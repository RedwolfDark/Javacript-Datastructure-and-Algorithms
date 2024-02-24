function linearSearch(t, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (t == arr[i]) return i;
  }

  return -1;
}
