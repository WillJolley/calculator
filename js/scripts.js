function add(number1, number2) {
  const addAns = number1 + number2;
  return number1.toString() + "+" + number2.toString() + "=" + addAns.toString() + ",";
}

const number1 = parseInt(prompt("Enter a number for maths:"));
const number2 = parseInt(prompt("Enter another number for maths:"));

window.alert(add(number1, number2) + " " + sub(number1, number2) + " " + mult(number1, number2) + " " + div(number1, number2));

function sub(number1, number2) {
  const subAns = number1 - number2;
  return number1.toString() + "-" + number2.toString() + "=" + subAns + ",";
}


function mult(number1, number2) {
  const multAns = number1 * number2;
  return number1.toString() + "*" + number2.toString() + "=" + multAns.toString() + ",";
}


function div(number1, number2) {
  const divAns = number1 / number2;
  return "and" + number1.toString() + "/" + number2.toString() + "=" + divAns.toString() + ".";
} 
