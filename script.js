function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let highest = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > highest) {
      second = highest;
      highest = num;
    } else if (num > second && num !== highest) {
      second = num;
    }
  }
  return second === -Infinity ? -Infinity : second;
}
console.log(secondHighest([5, 1, 2, 3, 4]));     
console.log(secondHighest([-1, -2, -3, -4]));   
console.log(secondHighest([]));                
console.log(secondHighest([1]));                
console.log(secondHighest([1, 1, 1, 1])); 
