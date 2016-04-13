// variables
var correct = 0;

// prompt
var answer1 = prompt("What does SOK stand for?");
var answer2 = prompt("When is SOK? (write out the date: month + day (number) )");
var answer3 = prompt("Where is SOK?");
var answer4 = prompt("What time do performances start?");
var answer5 = prompt("Should you go? (yes or no)");

// if statement
if ( answer1.toUpperCase() === 'SPIRIT OF KOREA' ) {
 correct += 1;
}

if ( answer2.toUpperCase() === 'APRIL 15' ) {
 correct += 1;
}

if ( answer3.toUpperCase() === 'CLOCKTOWER' ) {
  correct += 1;
}

if ( answer4.toUpperCase() === '7PM' ) {
  correct += 1;
}

if ( answer5.toUpperCase() === 'YES' ) {
  correct += 1;
}

console.log("correct: " + correct);

// output results
document.write("<p>The End!</p>");
document.write("<p>Please come check out the wonderful events Spirit of Korea have to offer this Friday!  Information (and consequently, the answer to the questions) is posted below!</p>");
document.write("<p>Here are how many you have gotten correct: " + correct + " out of 5");

if (correct === 5) {
  document.write("<p>YOU HAVE EARNED YOURSELF A GOLD MEDAL.  CONGRATULATIONS!</p>");
}

else if (correct === 4) {
  document.write("<p>YOU HAVE EARNED YOURSELF A SILVER MEDAL.  CONGRATULATIONS!</p>");
}

else if (correct === 3) {
  document.write("<p>YOU HAVE EARNED YOURSELF A BRONZE MEDAL.  CONGRATULATIONS!</p>");
}

else if (correct === 2) {
  document.write("<p>YOU HAVE EARNED YOURSELF A HONORORY MEDAL FOR PARTICIPATION.  CONGRATULATIONS!</p>");
}

else if (correct === 1) {
  document.write("<p>YOU HAVE EARNED YOURSELF A HONORORY MEDAL FOR PARTICIPATION.  CONGRATULATIONS!</p>");
}

else if (correct === 0) {
  document.write("<p>YOU HAVE EARNED YOURSELF A HONORORY MEDAL FOR PARTICIPATION.  CONGRATULATIONS!</p>");
}

document.write("<p>Here are the answers!</p>")
document.write("<p>SPIRIT OF KOREA</p>");
document.write("<p>APRIL 15TH, FRIDAY</p>");
document.write("<p>CLOCKTOWER</p>");
document.write("<p>BOOTHS        |   5PM</p>");
document.write("<p>FREE FOOD     |   6PM</p>");
document.write("<p>PERFORMANCES  |   7PM</p>");
document.write("<p>BE THERE OR BE SQUARE</p>");
