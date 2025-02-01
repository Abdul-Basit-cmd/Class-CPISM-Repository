function playFizzBuzz() {
  let iteration = document.getElementById('iteration').value;
  let termination = document.getElementById('termination').value;
  let outputDiv = document.getElementById('output');

  iteration = parseInt(iteration);
  termination = parseInt(termination);

  if (isNaN(iteration) || isNaN(termination)) {
    outputDiv.innerHTML = "<div class='alert alert-danger'>Please enter valid numbers!</div>";
    return;
  }

  if (iteration >= termination) {
    outputDiv.innerHTML = "<div class='alert alert-warning'>The start number should be less than the end number!</div>";
    return;
  }

  let result = "";
  for (let i = iteration; i <= termination; i++) {
    if (i % 5 === 0) {
      result += "<div class='alert alert-success'>" + i + " = FizzBuzz</div>";
    } else if (i % 2 === 0) {
      result += "<div class='alert alert-info'>" + i + " = Fizz</div>";
    } else {
      result += "<div class='alert alert-warning'>" + i + " = Buzz</div>";
    }
  }

  outputDiv.innerHTML = result;
}