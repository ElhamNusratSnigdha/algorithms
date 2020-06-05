/*************** Algorithm 1 ***********************/

function crossAdd(input){
    var answer = []; //empty array
    for(var i = 0; i < input.length; i++){
        var goingUp = input[i]; //starts from the first index
        var goingDown = input [input.length-1-i]; //starts from the last index
        answer.push(goingDown + goingUp);       
    }
    return answer;
}
let array = [1,2,3]; //given array
let reverseArray = []; //always initialize value
console.log(array); //printing original array

for(var i = array.length-1 ;i >= 0 ; i--){ //reversing the array
        reverseArray[array.length-1-i] = array[i];
}
console.log(reverseArray); //printing the reversing array
console.log(crossAdd(array)); //calling the crossaddFunction
/* Result:
[1, 2, 3]
[3, 2, 1]
[4, 4, 4]
Notation : O(n) - cause we go through all the inputs once in a loop */

/*************** Algorithm 2 ***********************/

function find(needle, haystack){
    for(var i=0; i < haystack.length; i++){
        if(haystack[i]===needle) return true;
    }
}
var needle = 5;
let haystack = [9, 6, 7, 5, 8, 3, 12, 10];
console.log(find(needle, haystack));
/* Result: true
Notation: O(n) - because of the worst case scenerio */

/*************** Algorithm 3 ***********************/

function makeTuples(input){
    var answer = [];
    for(var i=0;i<input.length;i++){
        for(var j=0;j<input.length;j++){
            answer.push([input[i], input[j]]);
        }
    }
    return answer;
}
let input = [1, 2, 3];
console.log(makeTuples(input));
/* Result:
[1, 1]
[1, 2]
[1, 3]
[2, 1]
[2, 2]
[2, 3]
[3, 1]
[3, 2]
[3, 3]
Notation: O(n^2) - because of nested loops*/

/*************** Algorithm 4 ***********************/
function basicRecursion(max, current){
    if(current>max) return; //always, first statement should be the base case for recursion - how to stop the recursive loop, else we'll get stack overflow
    console.log(current);
    basicRecursion(max, current+1);
}
basicRecursion(5,1);
/* Result:
Notation: O(n)*/
/*************** Algorithm 5 ***********************/

function fibonacci(n){
    if(n<=2)return 1; //if(n===0||n===1)
    else return fibonacci(n-1)+fibonacci(n-2);
}
console.log(fibonacci(3));
/* Result: 2
Notation: O(nlogn)*/

/*************** Algorithm 6 ***********************/
function factorial(n) {
    if(n<2) return 1;
    else return n*factorial(n-1);
}
console.log(factorial(3));
/* Result: 6
Notation: O(n!)*/

/*************** Algorithm 7 ***********************/
/* Result:
Notation: O(n)*/
/*************** Algorithm 8 ***********************/

/* 
function abc(x,y) {}
let abc = (x,y) => {}
same thing

let wr = (msg='----------')=> document.write(`<br>${msg}`);
same as,
function wr(msg){
    if(msg){
        msg = '--------';
    }
    return document.write('<br>' + msg);
}

If, we have no loops just some calculation, Notation : O(1)
There are also, Notation: O(log n) - for divide & conquer/recursive */