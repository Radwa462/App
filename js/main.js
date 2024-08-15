// window.alert("Hello from external")
//document.getElementById("test").innerHTML="Hello"
/*var x =5
console.log(x);
document.getElementById("demo").innerHTML=x;*/
/***************************************************************************************** */
/*var x= 12/4 , y= 9/4;

if(x==4,x==3){
    console.log("yas");
}
else{
    console.log("no");
}

if(y==4,y==3){
    console.log("yes");
}
else{
    console.log("no");
}*/

/******************************************************************************************* */
/*let a = Math.max(5, 3);
console.log(a);
let b = Math.max(10,7);
console.log(b);


document.getElementById("demo").innerHTML =
a + "<br>" + b;*/

/******************************************************************************************* */
/*var num = [-5];
if(num>0){
    console.log("this number is Positive");
}
else{
    console.log("this number is Negative");
}
document.getElementById("demo").innerHTML =num;

var num = [10];
if(num>0){
    console.log("this number is Positive");
}
else{
    console.log("this number is Negative");
}
document.getElementById("demo").innerHTML =num;*/
/*************************************************************************************** */
/*let a = Math.max(7,8,5);
console.log(a);
let b = Math.min(7,8,5);
console.log(b);
let c = Math.max(3,6,9);
console.log(c);
let d = Math.min(3,6,9);
console.log(d);

document.getElementById("demo").innerHTML =
a + "<br>" + b + "<br>" + c + "<br>" + d;*/
/***************************************************************************************** */
/*const number = prompt(" Enter a number:");

if(number % 2==0){
    console.log("The number is even");
}
else{
    console.log("The number is add");
}
document.getElementById("demo").innerHTML =number;*/

/************************************************************************************** */

/*function isVowel(char) {
    
    var lowerChar = char.toLowerCase();
    
    if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
        return true;
    } else {
        return false;
    }
}

function checkVowelOrConsonant(inputChar) {
    if (isVowel(inputChar)) {
        console.log("Input: " + inputChar);
        console.log("Output: vowel");
    } else {
        console.log("Input: " + inputChar);
        console.log("Output: consonant");
    }
}*/

/****************************************************************************************/
/*var i = 1;
while(i<=5){
    console.log(i);
 i++;
}*/

/****************************************************************************************** */
/* var i = 5;
	    
while(i < 6) {
     console.log("Multiplication table : " );
	       j = 1;
	       while(j <= 12) {
	           console.log(i + " X " + j + " = " + (i*j));
	           j++;
	       }
	       i++;
	    }*/
/************************************************************************************ */
	    
		/*var num= 15;
        if(number % 2==0){
            console.log(number);
            
        }
        else{
            console.log(null);
        }*/

/****************************************************************************************** */
       /*var x = 1;
        while ( x<15){

            x++;
            if (x%2==0){
            console.log("The Even number is: " +x); 
            }
        }*/

/*********************************************************************************************** */

/*var x = 4*4*4;
console.log(x);
var p =( 3^4);
console.log(p);*/

/************************************************************************************************ */

/*const number = prompt(" Enter Marks of five sudjects:");

function calculateMarks() {
    
    var marks = [];
    marks[0] = parseInt(document.getElementById("subject1").value);
    marks[1] = parseInt(document.getElementById("subject2").value);
    marks[2] = parseInt(document.getElementById("subject3").value);
    marks[3] = parseInt(document.getElementById("subject4").value);
    marks[4] = parseInt(document.getElementById("subject5").value);

    
    var totalMarks = marks.reduce(function (total, mark) {
        return total + mark;
    }, 0);

    
    var averageMarks = totalMarks / 5;

    
    var percentage = (totalMarks / 500) * 100;

   
    document.getElementById("totalMarks").innerHTML = "Total marks = " + totalMarks;
    document.getElementById("averageMarks").innerHTML = "Average Marks = " + averageMarks.toFixed(2);
    document.getElementById("percentage").innerHTML = "Percentage = " + percentage.toFixed(2);
}/*

/**************************************************************************************************** */
/*function getDaysInMonth() {
   
    var monthNumber = parseInt(document.getElementById("monthNumber").value);

    
    var daysInMonth = [31, 28, 31, 30, 31, 30, 
                       31, 31, 30, 31, 30, 31];

    if (monthNumber < 1 || monthNumber > 12) {
        alert("Invalid month number! Please enter a number between 1 and 12.");
        return;
    }

    var days = daysInMonth[monthNumber - 1];

    document.getElementById("result").innerHTML = "Days in Month: " + days;
}*/

/***************************************************************************************************** */

/*var userGrode =+ window.prompt("enter your grade");
if(userGrode>90){
    console.log("your grade is A");
}
else if(userGrode>80){
    console.log("your grade is B");
}  
else if(userGrode>70){
    console.log("your grade is C");
}  
else if(userGrode>60){
    console.log("your grade is D");
} 
else if(userGrode>50){
    console.log("your grade is E");
}   
else{
    console.log("your grade is F");
} */

/********************************************************************************************************* */

/*function daysInMonth(month, year) {
    
    month = parseInt(month, 10) - 1;
   
    var date = new Date(year, month + 1, 1);
    
    date.setDate(date.getDate() - 1);
    
    return date.getDate();
}

var inputMonth = prompt("Enter the month (1-12):");
var inputYear = prompt("Enter the year:");

if (inputMonth && inputYear) {
    var numDays = daysInMonth(inputMonth, inputYear);
    console.log(`Total number of days in month ${inputMonth} in year ${inputYear}: ${numDays}`);
} else {
    console.log("Invalid input. Please enter both month and year.");
}*/

/********************************************************************************************************************** */



/*function isVowel(char) {
    
    var lowerChar = char.toLowerCase();
   
    if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
        return true;
    } else {
        return false;
    }
}

function isConsonant(char) {
    
    var lowerChar = char.toLowerCase();
   
    if (lowerChar >= 'a' && lowerChar <= 'z' && !isVowel(lowerChar)) {
        return true;
    } else {
        return false;
    }
}

var inputChar = prompt("Enter an alphabet character:");

if (inputChar && inputChar.length === 1 && isNaN(inputChar)) {
    if (isVowel(inputChar)) {
        console.log(`Input: ${inputChar}`);
        console.log("Output: Vowel");
    } else if (isConsonant(inputChar)) {
        console.log(`Input: ${inputChar}`);
        console.log("Output: Consonant");
    } else {
        console.log(`Input: ${inputChar}`);
        console.log("Output: Not a valid alphabet character.");
    }
} else {
    console.log("Invalid input. Please enter a single alphabet character.");
}*/

/********************************************************************************************************************************* */

/*function findMaximum(num1, num2) {
  
    var number1 = parseFloat(num1);
    var number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }

    var maximum = Math.max(number1, number2);
    
    return maximum;
}

var input1 = prompt("Enter the first number:");
var input2 = prompt("Enter the second number:");

var result = findMaximum(input1, input2);

if (result !== undefined) {
    console.log(`The maximum number between ${input1} and ${input2} is: ${result}`);
}*/

/************************************************************************************************************************************ */

/*function checkEvenOrOdd(number) {
  
    var num = parseInt(number);

    if (isNaN(num)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }

    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
var inputNumber = prompt("Enter a number:");

var result = checkEvenOrOdd(inputNumber);

if (result !== undefined) {
    console.log(`The number ${inputNumber} is ${result}.`);
}*/

/*********************************************************************************************************** */

/*function checkNumberType(number) {
   
    var num = parseFloat(number);

    if (isNaN(num)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }

    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

var inputNumber = prompt("Enter a number:");

var result = checkNumberType(inputNumber);

if (result !== undefined) {
    console.log(`The number ${inputNumber} is ${result}.`);
}*/
/************************************************************************************************************** */


/*function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    
    if (num2 === 0) {
        return "Infinity";
    }
    return num1 / num2;
}

function calculate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}

var number1 = prompt("Enter the first number:");
var operator = prompt("Enter the operator (+, -, *, /):");
var number2 = prompt("Enter the second number:");

var result = calculate(number1, operator, number2);

if (result !== undefined) {
    console.log(`Result: ${result}`);
}*/