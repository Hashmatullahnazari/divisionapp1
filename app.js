function divideNumbers() {
  // Retrieve the input values of the num1 and num2 elements
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  // Perform the division and store the steps in the "steps" array
  var steps = [];
  var quotient = Math.floor(num1 / num2);
  var remainder = num1 % num2;
  steps.push({ first: num1, second: quotient + " r " + remainder });
  while (remainder > 0) {
    num1 = remainder * 10;
    quotient = Math.floor(num1 / num2);
    remainder = num1 % num2;
    steps.push({ first: num1, second: quotient + " r " + remainder });
  }

  // Insert the values into the table cells
  for (var i = 0; i < steps.length; i++) {
    document.getElementById("first" + (i + 1)).innerHTML = steps[i].first;
    document.getElementById("second" + (i + 1)).innerHTML = steps[i].second;
  }

  // Update the input values and result
  document.getElementById("result").innerHTML = quotient;
  document.getElementById("input1").innerHTML = num1;
  document.getElementById("input2").innerHTML = num2;
}
