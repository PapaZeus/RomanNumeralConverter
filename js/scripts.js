$(document).ready(function(){


   
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#numberInput").val())
    var numeralString = numeralConverter(userInput);
    numeralOrderConverter(numeralString);
  });

  function numeralConverter(num1) {

    console.log("Num1: "+num1)
    var result = "";

    while (num1 > 0)  {

      if (num1 - 1000 >= 0) {
        num1 -= 1000;
        result += "M";
      }
      else if (num1 - 500 >= 0) {
        num1 -= 500;
        result += "D";
      }
      else if (num1 - 100 >= 0) {
        num1 -= 100;
        result += "C";
      }
      else if (num1 - 50 >= 0) {
        num1 -= 50;
        result += "L";
      }
      else if (num1 - 10 >= 0) {
        num1 -= 10;
        result += "X";
      }
      else if (num1 - 5 >= 0) {
        num1 -= 5;
        result += "V";
      }
      else if (num1 - 1 >= 0) {
        num1 -= 1;
        result += "I";
      }
      else {
        console.error("numeralConverter: unhandled exception")
      }
    }
    console.log(result);
    return result;
  }

  function numeralOrderConverter(numerals) {

    var result = "";
    // var split = numerals.split();
    // if(numerals.)
    
    result = numerals.replace('CCCC', 'CD')
    // result = numerals.replace('XXXX', 'XL')
    // result = numerals.replace('IIII', 'IV');



    console.log("after numeralOrderConverter: "+result);

  }
});
