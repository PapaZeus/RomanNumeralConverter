$(document).ready(function(){


   //FRONT END
  $("form").keyup(function(event){
    event.preventDefault();
    var userInput = parseInt($("#numberInput").val())
    var numeralString = numeralConverter(userInput);
    console.log(numeralString);
    $("#results").text(numeralString);
  });



  //BACK END
  function numeralConverter(num1) {

    console.log("Num1: "+num1)
    var result = "";

    if(num1 > 9000)
    {
      return "It's over 9000!";
    }

    while (num1 > 0)  {


      if (num1 - 1000 >= 0) {
        num1 -= 1000;
        result += "M";
      }
      else if (num1-900 >= 0) {
        num1 -= 900;
        result += 'CM';
      }
      else if (num1 - 500 >= 0) {
        num1 -= 500;
        result += "D";
      }
      else if (num1 - 400 >= 0){
        num1 -= 400;
        result += "CD";
      }
      else if (num1 - 100 >= 0) {
        num1 -= 100;
        result += "C";
      }
      else if (num1 - 90 >= 0) {
        num1 -= 90;
        result += "XC";
      }
      else if (num1 - 50 >= 0) {
        num1 -= 50;
        result += "L";
      }
      else if (num1 - 40 >= 0) {
        num1 -= 40;
        result += "XL"
      }
      else if (num1 - 10 >= 0) {
        num1 -= 10;
        result += "X";
      }
      else if (num1 - 9 >= 0)  {
        num1 -= 9;
        result += "IX"
      }
      else if (num1 - 5 >= 0) {
        num1 -= 5;
        result += "V";
      }
      else if (num1 - 4 >= 0) {
        num1 -= 4;
        result += "IV"
      }
      else if (num1 - 1 >= 0) {
        num1 -= 1;
        result += "I";
      }
      else {
        console.error("numeralConverter: unhandled exception")
      }
    }
    return result;

  }
});
