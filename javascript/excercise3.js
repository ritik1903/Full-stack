var roster=[]
function addNew(){
  var newName=prompt("What name would you like to add?")
  roster.push(newName)
}

//remove student
function remove(){
  var remName=prompt("What name would you like to remove?")
  var index=roster.indexOf(remName);
  roster.splice(index,1)
}

//Display roster
function display(){
  console.log(roster);
}

//start by asking is they want to use the web app
var start=prompt("Would you like to start the roster web app? y/n")
var req="Empty";


if (start=="y") {
  while (req !== "quit") {
    req=prompt("Please select an action:add,remove,display,quit.")
    if (req==="add") {
      addNew();
    }else if (req==="display"){
      display();
    }else if (req==="remove") {
      remove();
    }else{
    alert("Not Recognized,will quit!")
    //req="quit"
    }
  }
}

alert("Thanks for using the Web App! Please refresh to stsrt over!")
