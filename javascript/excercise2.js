var firstname=prompt("Enter your first name:")
var lastname=prompt("Enter the last name:")
var age=prompt("Enter the age?")
var height=prompt("What is your height?")
var petname=prompt("Enter the pet name?")
alert("Thankyou so much for the information!")


var nameCon=null;
var ageCon=null;
var heightCond=null;
var petCond=null;

if(firstname[0]===lastname[0]){
  nameCon=true;
}else{
  nameCon=false;
}

if (age>20 && age<30) {
  ageCon=true;
}else{
  ageCon=false;
}


if (height>=170) {
  heightCond=true;
}else{
  heightCond=false;
}


if (petname[petname.length-1] === "y") {
  petCond=true;
}else{
  petCond=false;
}


if(nameCon && ageCon && heightCond && petCond){
  console.log("Welcome Spy!");
}else{
  console.log("Noting to see here");
}
