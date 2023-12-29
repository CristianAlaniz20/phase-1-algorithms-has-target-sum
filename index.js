function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let num1 = 0; num1 < array.length; num1++) {
    for (let num2 = 0; num2 < array.length; num2 ++) {
      if (num2 !== num1) {
        const sum = array[num2] + array[num1];
        if (sum === target) {
          return true
        } 
      }
    }
  }
  return false 
}

/* 
  Write the Big O time complexity of your function here
  O(n squared)
*/

/* 
  Add your pseudocode here
  
  Make hasTargetSum function have two parameters, an array and a target
  The passed array argument is an array of numbers and the passed target is a number
  Check if any pair of numbers inside the array sums up to the target number
  If it does
    return true
  else return false 
*/

/*
  Add written explanation of your solution here
  
  The hasTargetSum function takes in an array and a target number when invoked.
  Inside the code block we have a for loop that declares the variable num1 
  and iterates through every index of the array. Nested inside the outer for
  loop I have another for loop that declares the variable num2. This for
  loop iterates through the array as well. If the value of num2 is not
  equal num1, I add their corresponding values and assign the sum to the 
  sum variable. If the sum is equal to the target passed in, then the 
  function returns true. If no pair of numbers inside the array equal 
  the target, then the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 3, 5, 7], 6));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 6, 50], 100));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
