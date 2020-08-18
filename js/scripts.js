//User Interface Logic
$(document).ready(function() {
  $("#sieve").submit(function(event) {
    event.preventDefault();
    const inputNumber = parseInt($("input#input1").val());
    sieve(inputNumber);
  });
});

function sieve(inputNumber) {
  let numberArray = [];
  let outputArray = [];

  for (let i = 0; i < inputNumber; i++) {
    numberArray.push(true);
  }

  console.log(numberArray);

  
}