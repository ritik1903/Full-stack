var headone=document.querySelector('#one')
var headtwo=document.querySelector('#two')
var headthree=document.querySelector('#three')


headone.addEventListener('mouseover',function(){
  headone.textContent="Mouse Currently Over";
  headone.style.color='red';
})


headone.addEventListener("mouseout",function() {
  headone.textContent="HOVER OVER ME";
  headone.style.color='black';
})


headtwo.addEventListener('mouseover',function(){
  headtwo.textContent='CLICKED ON!';
  headtwo.style.color='blue';
})


headtwo.addEventListener('mouseout',function(){
  headtwo.textContent='PLZ CLICK!';
  headtwo.style.color='green';
})


headthree.addEventListener('click',function(){
  headthree.textContent='CLICKING BY YOU';
  headthree.style.color='maroon';
})


//Another event listner which is ---  "dbclick"
