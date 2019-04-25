var fruit = ['apple', 'strawberry','mango'];
console.log(fruit);

var fruit1 = "apple";
var fruit2 = "strawberry";
var fruit3 = "mango";

console.log(fruit[fruit.length-1]);
fruit.push('peach');
console.log(fruit);

fruit.unshift('banana');
console.log(fruit);

fruit[2] = 'watermelon';

fruit.splice(1, 1);

var snacks = fruit;
console.log(snacks);
console.log(fruit);
