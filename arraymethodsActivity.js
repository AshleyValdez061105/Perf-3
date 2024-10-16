let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);
fruits.pop();
console.log(fruits);

let array2 = [1, 2, 3];
array2.shift();
console.log(array2);
fruits.sort();

console.log(fruits);
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);

let months = ["January", "February", "March", "April","June"];
months.splice(2, 1, "March", "May");
console.log(months);
