//only number

function sum(num : number){
    return num*5
}
console.log('sumvalue',sum(5))

//only string

function greeting(val : string){
    return val
}

console.log(greeting('Hi,Welcome all,Good Morning'))

//pass more then one parameter in function

function userLogged(name:string,email:string,ispaid:boolean,userId:number){
    return 'logged in'
}
console.log(userLogged('kohila','welcome@gmail.com',true,1690))


//use arrow functions

let userLog = (name:string,email:string,ispaid:boolean,userId:number) => 'user was logged in'

console.log(userLog('kohila','welcome@gmail.com',true,1690))

let getHello = (s:string) : string => 'hello';
console.log(getHello('welcome'))


// array values in function

const language = ['tamil','english','malayalam']
const numbers = [1,2,3,4]

const value = language.map((lang):String =>{
    return 'peoples are speaking   '+ lang;
})

console.log(value)


// error handling functions

//this function print the error message only does not return values because we used return type was void

function consleError(errmesg:string) : void {
    console.log(errmesg)
}

//error handling function

// function handleError(errmesg:String) : void {
//    throw new Error(errmesg)
// }

//some functions never return a value 

function handleError(errmesgs:String) : never {
    throw new Error()

}

