function swap(arr, i) {
  var saveElement = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = saveElement;
}

function compare (arr, i) {
  return arr[i] <= arr[i+1];
}

function bubbleSort(arr) {
  for (var j = arr.length; j > 0; j--) {
    var swapped = false;
    for (var i = 0; i < j - 1; i++) {
      if (!compare(arr, i)) {
        swap(arr, i);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
