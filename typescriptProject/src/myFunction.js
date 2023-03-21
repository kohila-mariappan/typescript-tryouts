"use strict";
//only number
function sum(num) {
    return num * 5;
}
console.log('sumvalue', sum(5));
//only string
function greeting(val) {
    return val;
}
console.log(greeting('Hi,Welcome all,Good Morning'));
//pass more then one parameter in function
function userLogged(name, email, ispaid, userId) {
    return 'logged in';
}
console.log(userLogged('kohila', 'welcome@gmail.com', true, 1690));
//use arrow functions
let userLog = (name, email, ispaid, userId) => 'user was logged in';
console.log(userLog('kohila', 'welcome@gmail.com', true, 1690));
let getHello = (s) => 'hello';
console.log(getHello('welcome'));
// array values in function
const language = ['tamil', 'english', 'malayalam'];
const numbers = [1, 2, 3, 4];
const value = language.map((lang) => {
    return 'peoples are speaking   ' + lang;
});
console.log(value);
// error handling functions
//this function print the error message only does not return values because we used return type was void
function consleError(errmesg) {
    console.log(errmesg);
}
//error handling function
// function handleError(errmesg:String) : void {
//    throw new Error(errmesg)
// }
//some functions never return a value 
function handleError(errmesgs) {
    throw new Error();
}
