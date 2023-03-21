"use strict";
// use an array store a collection of data 
const myArray = ['apple', 'mango', 'orange', 'banana'];
//Access an Array's Contents Using Bracket Notation 
console.log(myArray[2]);
myArray[2] = "watermelon";
console.log(myArray[2]);
const fruits = myArray[0] + myArray[1];
console.log(fruits);
//multi-dimensional array
///const numArray = [[1,2,3],[4,5,6],[7,8,9]]
const arr = [['one'], ['two']];
// Empty two-dimensional array
const arr2 = [];
const arr3 = [
    [{ id: 1, name: 'Alice' }],
    [{ id: 2, name: 'Bob' }],
];
console.log(arr3);
// array of number arrays
//const nums = [[1,2,3],[4,5,6],[1,2,3]]
const nums = [[1, 2, 3], [4, 5, 6], [1, 2, 3]];
//const nums:[number,number,number][] = [[1,2,3],[4,5,6],[1,2,3],[1,2,3,4]]
console.log('array of number arrays', nums[0][0], nums[1]);
//multitype multideimensional array
//const arrValue =[['apple',1],['orange',2],['watermelon',3]]
const arrValue = [['apple', 1, true], ['orange', 2, false], ['watermelon', 3, true]];
console.log('array of value arrays', arrValue[0][0], arrValue[1]);
// Add Items to an Array with push() and unshift() 
const values = [1, 2, 3, 4, 4, 5, 67, 8, 9];
console.log('before push and unshift', values);
values.push(22);
values.unshift(11);
console.log('after push and unshift', values);
// Remove Items from an Array with pop() and shift() 
values.pop();
values.shift();
console.log('after pop and shift', values);
//6. remove any number of consecutive elements from anywhere in an array 
const oldArray = [1, 2, 3, 4, 5, 67, 3, 4, 5];
const newarr = [];
const k = 67;
const superValue = (oldArray) => {
    console.log(oldArray);
    for (let i = 0; i < oldArray.length; i++) {
        if (oldArray[i] != k) {
            newarr.push(oldArray[i]);
        }
        else {
            continue;
        }
    }
};
const ans = superValue(oldArray);
console.log('after remove particular value', newarr);
//7. Add Items Using splice() 
//array.splice(index, howMany, [element1][, ..., elementN]);
// syntax = array.splice(indexposition,numberof elements remove or add, number of element values)
//https://www.tutorialspoint.com/typescript/typescript_array_splice.htm?key=array.slice
const fruitsArr = ['apple', 'orange', 'mango', 'banana', 'grapes'];
console.log('original array', fruitsArr);
//let addF = fruitsArr.splice(3,0,'watermelon')
let addF1 = fruitsArr.splice(3, 2, 'watermelon', 'pineapple');
//console.log('original array',fruitsArr,'after add value in arrayF',addF)
console.log('original array', fruitsArr, 'after add value in arrayF1', addF1);
console.log('original array', fruitsArr, 'removed value in arrayF1', fruitsArr.splice(1, 2), fruitsArr);
//8. Copy Array Items Using slice() 
//remove the particular elements from an array and retuen a value into new array
//syntax>>>>array.slice(statposition[,endposition])
const fruitsArr1 = ['apple', 'orange', 'mango', 'banana', 'grapes'];
let removeFruit = fruitsArr1.slice(1, 2);
console.log(fruitsArr1, 'after slicing', removeFruit);
console.log(fruitsArr1, 'after slicing', fruitsArr1.slice(1, 3));
//9. Copy an Array with the Spread Operator 
let nameList = ['anuj', 'ram', 'ravi', 'prasad'];
let copyName = [...nameList];
console.log('copied array from nameList', copyName);
//10. Combine Arrays with the Spread Operator 
let id = [1, 2, 3, 4];
let student = [...nameList, 'vino', ...id, 5];
console.log('combine 2 array using spread operator', student);
//11. Check For The Presence of an Element With indexOf() 
//synatx >>>>> string.indexOf(searchValue[, fromIndex])
// if the element does not exist in the array, then the method returns -1.
console.log(nameList, 'prescence of', nameList.indexOf('ravi'));
//12. Iterate Through All Array's Items Using For Loops 
//https://www.tutorialsteacher.com/typescript/for-loop
// basic for loop
// not >>>  it get element       position and values
let arrLoop = [11, 12, 33, 42, 75, 96];
for (let i = 0; i < arrLoop.length; i++) {
    console.log('for', 'index', i, 'vaue', arrLoop[i]);
}
// for of Loop
// it get only values from an array
for (let i of arrLoop) {
    console.log('for of', 'index', i);
    //console.log(i)
}
//for in loop
// it get only get index position from an array
for (let i in arrLoop) {
    console.log('for in value', i);
}
//13. Add Key-Value Pairs to JavaScript Objects using object.assign 
//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
// It returns the modified target object. 
const source = {
    mobiles: {
        brand: ['redmi', 'samsung']
    },
    laptops: {
        brand: ['dell', 'lenovo']
    }
};
const target = {
    mobile: {
        price: [10000, 12000]
    },
    laptop: {
        price: [100000, 200000]
    }
};
console.log(source.mobiles.brand[0], target.mobile.price[0]);
const product = Object.assign(source, target);
console.log('product Details', product);
//14. Access Property Names with Bracket Notation 
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    place: 'chennai',
    data: {
        totalUsers: 51,
        online: 42
    }
};
console.log(userActivity['id']);
//15.Modify an Object Nested Within an Object
userActivity.data.online = 55;
userActivity['data']['online'] = 60;
console.log('modify object value', userActivity);
//16. Use the delete Keyword to Remove Object Properties 
//delete userActivity.place
console.log('after deletion', userActivity);
//17. Iterate Through the Keys of an Object with a for...in Statement 
const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true
};
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}
// has own property methods 
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`${key}: ${user[key]}`);
    }
}
// object.keys method in es8 feature
const courses = {
    java: 10,
    javascript: 55,
    nodejs: 5,
    php: 15
};
const keys = Object.keys(courses);
console.log('keys', keys);
keys.forEach((key) => {
    console.log(`${key}: ${courses[key]}`);
});
