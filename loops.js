//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)
function multipleOfNine() {
  let product = 1;
  for (let i = 0; i <= 10; i++) {
    product = i * 9;
    console.log(`${i} * 9 = ${product}`);
  }
}

multipleOfNine();

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it

function five() {
  let i = 5;
  while (i <= 50) {
    console.log(i);
    i += 5;
  }
}

five();

//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;

function duplicate(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }

  return false;
}


console.log(duplicate([2,7,5,9,8,7]));
console.log(duplicate([1,2,3]))

//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..


function assignGrade(score) {
    switch (true) {
      case score > 90 && score <= 100:
        return `For ${score}, you got a A`;
      case score > 80 && score <= 89:
        return `For ${score}, you got a B`;
      case score > 78 && score <= 80:
        return `For ${score}, you got a C`;
      case score > 56 && score <= 78:
        return `For ${score}, you got a D`;
      case score >= 0 && score <= 56:
        return `For ${score}, you got a F`;
      default:
        return "Not a valid score number, score must be between 0-100";
    }
  }

console.log(assignGrade(88));