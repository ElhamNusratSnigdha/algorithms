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

console.log('"This is Bubble Sort"');
var bubbleSort = num7 => {  
    do {
      var swapped = false;
      for (var i = 0; i < num7.length; i++) {
        console.log(num7);
        if (num7[i] > num7[i+1]) {
          var temp = num7[i];
          num7[i] = num7[i+1];
          num7[i+1] = temp;
          swapped = true;
        }
      }
    } while(swapped);
    console.log(num7);
  };
  
var num7 = [10,5,8,2];
bubbleSort(num7);

/* Result:
Notation: O(n^2)*/

/*************** Algorithm 8 ***********************/

console.log('"This is Insertion Sort"');

var insertionSort = num8 => {  
    for (let i = 1; i < num8.length; i++) {
      for (let j = 0; j < i; j++) {
        console.log(num8);
        if (num8[i] < num8[j]) {
          let spliced = num8.splice(i, 1);
          num8.splice(j, 0, spliced[0]);
        }
      }
    }
  };
var num8 = [10,5,8,2];
insertionSort(num8);

/* Result:
Notation: O(n^2)*/

/*************** Algorithm 9 ***********************/
console.log('"This is Merge Sort"');

const mergeSort = num9 => {
    if (num9.length < 2) {
      return num9;
    }
    const length = num9.length;
    const middle = Math.floor(length / 2);
    const left = num9.slice(0, middle);
    const right = num9.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
  };
  
  const merge = (left, right) => {
    
    const results = [];
    
    while (left.length && right.length) {
      
      if (left[0] <= right[0]) {
        results.push(left.shift());
      }
      else {
        results.push(right.shift());
      }
    }
    
    return results.concat(left, right);
  };

    var num9 = [10,5,8,2];
    console.log(mergeSort(num9));
/* Result:
Notation: O(nlogn)*/

/*************** Algorithm 10 ***********************/

console.log('"This is Quick Sort"');
    
    const quickSort = (num10) => {
        if(num10.length <=1) return num10;

        var pivot = num10[num10.length - 1];
        let left = [];
        let right = [];

        for(let i=0;i<num10.length-1;i++){
            if(num10[i]<pivot){
                left.push(num10[i]);
            }
            else {
                right.push(num10[i]);
            }
        }

        return [...quickSort(left),pivot, ...quickSort(right)];
        // return quickSort(left).concat(pivot, quickSort(right));
    }

      const num10 = [10, 5, 8, 2];
      console.log(quickSort(num10));

/* Result:
Notation: O(nlogn)*/

/*************** Algorithm 11 ***********************/

/* Result:
Notation: O(n^2)*/

/*************** Algorithm 12 ***********************/

/* Result:
Notation: O(n^2)*/

/*************** Algorithm 13 ***********************/
    
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