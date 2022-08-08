var ham = 0;
var cheese = 0;

var report = "blank";
if(ham>=10 && cheese >= 10){
  report="strong sales of both ham and cheese!"
}else if (ham===0 && cheese === 0){
  report="Nothing Sold!"
}else {
  report="We had some saleas of items"
}
console.log(report);
