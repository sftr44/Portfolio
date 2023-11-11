function calculator() {
  var one = parseFloat(document.getElementById('one').value);
  var two = parseFloat(document.getElementById('two').value);
  var symbol = document.getElementById('symbol').value;
  var resultElement = document.getElementById('output');

  if (symbol == "+") {
    resultElement.value = one + two;
  } else if (symbol == "-") {
    resultElement.value = one - two;
  } else if (symbol == "*") {
    resultElement.value = one * two;
  } else if (symbol == "/") {
    resultElement.value = one / two;
  } else if (symbol == "%") {
    resultElement.value = one % two;
  }
   else {
    resultElement.value = "Неверный знак";
  }
}
