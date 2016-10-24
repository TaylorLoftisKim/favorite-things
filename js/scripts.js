
$(document).ready(function(){
  $("#favthings").submit(function(event){
  debugger;
  var foodInput = $("#food").val();
  var colorInput = $("#color").val();
  var animalInput = $("#animal").val();

  var firstArray = [foodInput, colorInput, animalInput];
  var secondArray = [];

  secondArray.push(firstArray[1], firstArray[0], firstArray[2]);
  $(".list1").text(secondArray[0]);
  $(".list2").text(secondArray[1]);
  $(".list3").text(secondArray[2]);

event.preventDefault();
  });
});
