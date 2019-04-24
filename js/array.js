// array data type
var arr1 =[]; //empty array
var arr2 =[1,2]; // has 2 elements
console.log(arr2);
console.log(arr2 [1]); // index =1
console.log(arr2 [2]); // index =2

var arr3 = ['hi', 'hello', 'there'];
//display/output arr3
console.log(arr3);
//display/output 'there'

console.log(arr3[2]);
console.log(arr3.length); //don't really need
console.log(arr3[arr3.length-1]);
arr3.push('welcome'); //inserts another word
console.log (arr3);
console.log(arr3[arr3.length-1]); // singles out the new word

arr3.unshift('greeting'); //will add to the begining of the arr3-word
console.log(arr3);

arr3.splice(2,1,'Ana'); //looked at the position of the word "hello" and how many you wanted words you wanted to remove and last add new word
console.log(arr3);
arr3.splice(2,2); // remove 2 items starting at index 2
arr3.splice(2,2, 'ana', 'uyehara'); //remove 2 items starting at index 2, insert and & uyehara at index 2,3
console.log(arr3);

arr3.splice (2,0,'hola');
console.log(arr3);
var arr4 = [10,40,'abc', 'xyz', true]; // not recommended to do this
console.log(arr4);

arr4.pop(); // removes last item of arr4
console.log(arr4);

arr4.shift(); // removes first item of arr4
console.log(arr4);

var arr5 = arr4.slice(); // if you want to manipulate an array with out changing it at the top. It makes a copy of arr4 into arr5
console.log(arr5);
var arr6 = arr4;// this is bot a copy. it is exact value


arr4.push('false');
console.log(arr4);
console.log(arr5);
console.log(arr6);

var arr7 = arr4.slice(1,3); // starts at index 1, captures everything before index 3
console.log(arr7);


