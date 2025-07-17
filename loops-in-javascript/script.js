//write a for loop that print out all even numbers between 1 to 10
for (var i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
};

// write a while loop that counts from 10 downwards
var i = 10;
while (i > 0){
    console.log (i);
    i--
};


var i = 5;
do {
    console.log (i);
    i++
} while(i < 4)


var secretNumber = 4;
var guess;
var attempts = 0;

do {
  guess = parseInt(prompt('guess a number between 1 and 10'));
  attempts++;

  if (guess !== secretNumber){
    alert('wrong! try again');
  }
} while (guess !== secretNumber);
alert('correct! you guessed it in' + attempts + 'attemp(s).');