// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

//user interface logic
const number1 = parseInt(prompt("Enter a number: "));
const number2 = parseInt(prompt("Enter another number: "));

// window.alert("The sum is " + add(number1, number2) + "." + "The subtraction result is " + subtract(number1, number2) + "." + "The multiplication result is " + multiply(number1, number2) + "." + "The division result is " + divide(number1, number2) + ".")


// window.alert("your addition result is " + add(number1, number2));
// window.alert("your subtraction result is " + subtract(number1, number2));
// window.alert("your multiplication result is " + multiply(number1, number2));
// window.alert("your division result is " + divide(number1, number2));

window.alert(parseInt(number1) + "+" + parseInt(number2) + "=" + add(number1, number2) + "." + parseInt(number1) + "-" + parseInt(number2) + "="  + subtract(number1, number2) + "." + parseInt(number1) + "*" + parseInt(number2) + "="  + multiply(number1, number2) + "." + parseInt(number1) + "/" + parseInt(number2) + "="  + divide(number1, number2) + ".")