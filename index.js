//variables: let, const, var
/*let full_name;//declaration
full_name = "sai teja";//initialization

var last_name = "teja";//declaration and initialization
const profession = "software developer";//declaration and initializationscerip

console.log(full_name);
let person=null;
console.log(person);//undefined
let num="10";
console.log(typeof num);//number

//functions
function greet(){
    console.log("hello world");
}
greet();

let callFirstName = function(){
    console.log("sai teja");
}
callFirstName();*/

//arrow function
//push and pop slice
// let arr = [1,2,3,4,5];
// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.slice(1,3));
// //map
// let arr1 = [1,2,3,4,5];
// let newArr = arr1.map(function(num){
//     return num*2;
// });
// console.log(newArr);
//objects
// {
// key value
// }
// let laptopObj = {
//     name: "dell",
//     core: "i7",
//     cost: 50000,
//     executeFn:()=>{
//         console.log("hello");
//     }
// };
// c=laptopObj.core ;
// console.log(laptopObj.cost);
// console.log(laptopObj.core,laptopObj.name);
// console.log(laptopObj.executeFn());
// laptopObj.name = "hp";
// console.log(laptopObj.name);
// laptopObj["cost"] = 60000;
// console.log(laptopObj.cost);
// let arr2 = [1,2,3,4,5,6];
// console.log(arr2.length);

// let laptopObj={
//     name:"dell",
//     core:"i7",
//     cost:50000,
//     executeFn:()=>{
//         console.log("obj is executed");
// },
// };
// for (let key in laptopObj){
//     console.log(laptopObj[key]);
    

// };
// let arr2 = [1,2,3,4,5,6];
// arr2.forEach((eachEle)=>{
//     console.log(eachEle)
// })
//es6
// let arr3=[1,2,3,4,5,6];
// let [firstvalue,secondvalue]=arr3;
// console.log(firstvalue,secondvalue);

// let laptopObj={
//     name:"dell",
//     core:"i7",
//     cost:50000,
//     executeFn:()=>{
//         console.log("obj is executed");
// },
// };
// let {core}=laptopObj;

//template literals
// let num1=1;
// let num2=4;
// console.log('The sum of num1 and num2 ${num1+num2}')

// //rest operator
// let arr1=[
// let arr2=[4,5,6];
// let newArr=[...arr1,...arr2];
// console.log(newArr)
function sum(...nums){
    console.log(nums);
}
sum(1,2);

