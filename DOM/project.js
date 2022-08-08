//console.log("Connected")


//Restart game button

var restart=document.querySelector("#b");


//grabs all the square

var square=document.querySelectorAll("td");



// Clear all the square


function clearBoard() {
  for (var i = 0; i < square.length; i++) {
    square[i].textContent=" ";
  }
}

restart.addEventListener('click',clearBoard);

// Ckeck the square marker
function changeMarker(){
  if (this.textContent===''){
    this.textContent='X';
  }else if (this.textContent==='X'){
    this.textContent='O';
  }else{
    this.textContent='';
  }
}

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener('click',changeMarker)
}

//for loop to add event listener to all the square
