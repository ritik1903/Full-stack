//function hello(){
//  console.log("Hello World!");
//}

//pass the parameter
//function hello(name){
//  console.log("hello"+ name);
//}

//add two number
//function addName(num1,num2) {
//  console.log(num1+num2);
//}

//assign a parameter
/* function hello(name="ritik") {
  console.log("Hello"+name);
} */
/*function formal(name="Ritik",title="sir") {
  return title + " " + name
}
 */

 function fiveTimes(inputNum) {
   //Local scope
   var result=inputNum*5
   return result
 }


//Global scope
var v="GLOBAL V"
var stuff= "GLOBAL STUFF"

function fun(stuff) {
  console.log(v);
  stuff="Reasign stuff inside func"
  console.log(stuff);
}
fun() 
