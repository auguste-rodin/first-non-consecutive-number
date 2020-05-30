// A simple for if loop using the array length counter. When a non-equal comparison is found the function will return the following number. If all the numbers are in sequence (incuding negative numbers and sequences beginning after 1) the function will return null.




function firstNonConsecutiveNumber(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}

firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]);