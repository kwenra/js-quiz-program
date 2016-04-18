// quiz begins, no answers correct
var correct = 0;
var totalAsked = 0;

function question(questionText, realAnswer) {
  var answerInput = prompt(questionText);
  totalAsked += 1;
  if ( answerInput.toUpperCase() === realAnswer ) {
    correct += 1;
   }
   console.log("total asked: " + totalAsked + " | correct: " + correct);
}

question("asking some question", "TEST");
question("another question", "ANSWER");
question("third question", "YES");

// ask questions
// var answer1 = prompt("Name a programming language that's also a gem");
// if ( answer1.toUpperCase() === 'RUBY' ) {
//  correct += 1;
// }
// var answer2 = prompt("Name a programming language that's also a snake");
// if ( answer2.toUpperCase() === 'PYTHON' ) {
//  correct += 1;
// }
// var answer3 = prompt("What language do you use to style web pages?");
// if ( answer3.toUpperCase() === 'CSS' ) {
//  correct += 1;
// }
// var answer4 = prompt("What language do you use to build the structure of web pages?");
// if ( answer4.toUpperCase() === 'HTML' ) {
//  correct += 1;
// }
// var answer5 = prompt("What language do you use to add interactivity to a web page?");
// if ( answer5.toUpperCase() === 'JAVASCRIPT' ) {
//  correct += 1;
// }

// output results
document.write("<p>You got " + correct + " out of " + totalAsked + " questions correct.<p>");

// output rank
if ( correct === totalAsked ) {
  document.write("<p><strong>You earned a gold crown!</strong></p>");
} else if (correct >= (totalAsked - 1)) {
  document.write("<p><strong>You earned a silver crown.</strong></p>");
} else if (correct >= (totalAsked - 2)) {
  document.write("<p><strong>You earned a bronze crown.</strong></p>");
} else {
  document.write("<p><strong>No crown for you. You need to study.</strong></p>");
}