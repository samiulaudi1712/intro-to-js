// Task-1:

var totalMoney = 1000 ;
var appleMoney = 100 ;
var orangeMoney = 300 ;
var totalFruit= appleMoney + orangeMoney ;
// console.log(totalFruit);

var remainingMoney = totalMoney - totalFruit ;
console.log(remainingMoney);


// Task-2:
var num1 = 1;
var num2 = 3;
var num3 = 5;
var num4 = 4;
var num5 = 6;
var sum = num1 + num2 + num3 + num4 + num5;
// console.log(sum);
var avg = sum / 5;
console.log(avg.toFixed(2))

// Task-3:
var number=113;
number %= 5;
console.log(number);

// task-4:
var a = isNaN('11');

var a = isNaN(2 - 10);
console.log(a);

1. var a = isNaN('11');



// Explanation:
// The isNaN() function checks whether a value is NaN (Not-a-Number).
// In this case, '11' is a string that can be converted to a number (11).
// Since '11' is a valid number, isNaN('11') will return false.
// Therefore, a will be false.


// 2. var a = isNaN(2 - 10);
// Explanation:
// First, the expression 2 - 10 is evaluated, which equals -8.
// Since -8 is a valid number, isNaN(-8) will return false.
// Therefore, a will be false.


// Summary:
// In both cases:

// var a = isNaN('11'); will set a to false.
// var a = isNaN(2 - 10); will also set a to false.
// So after both lines of code, a will hold the value false.