function fibLoop(n) {
  let fibArray = [0, 1];
  for (let i = 1; i < n - 1; i++) {
    fibArray.push(fibArray[i] + fibArray[i - 1]);
  }
  return fibArray;
}

function fibRecursive(n) {
  if (n < 3) {
    return [0, 1];
  }
  const fibArray = fibRecursive(n - 1);
  fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  return fibArray;
}

function mergeSort(array, sorted = []) {
  if (array.length < 2) {
    return array;
  }
  const leftHalf = mergeSort(array.slice(0, Math.ceil(array.length / 2)));
  const rightHalf = mergeSort(array.slice(Math.ceil(array.length / 2)));

  if (leftHalf[0] != null && rightHalf[0] != null) {
    let i = 0;
    let j = 0;
    while (i < leftHalf.length && j < rightHalf.length) {
      if (leftHalf[i] < rightHalf[j]) {
        sorted.push(leftHalf[i]);
        i++;
      } else {
        sorted.push(rightHalf[j]);
        j++;
      }
    }
    if (i < leftHalf.length) {
      sorted.push(...leftHalf.slice(i, leftHalf.length));
    }
    if (j < rightHalf.length) {
      sorted.push(...rightHalf.slice(j, rightHalf.length));
    }
  }
  return sorted;
}

console.log(fibLoop(8));
console.log(fibRecursive(8));
console.log(mergeSort([5, 2, 1, 3, 6, 4]));
