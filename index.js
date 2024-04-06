function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
            return true;
        }
    }
}
return false;
}

/* 
  Time Complexity: O(n^2)
*/

/* 
function hasTargetSum(arr, target):
    Initialize an empty map
    
    for each number in arr:
        Calculate complement = target - number
        
        If complement exists in the map:
            Return true
        
        Add the current number to the map
        
    Return false
*/

/*
  function hasTargetSum takes an array of numbers and a target sum as input.
  It iterates through the array and checks if there are two numbers that sum up to the target.
  If such a pair is found, the function returns true; otherwise, it returns false.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
