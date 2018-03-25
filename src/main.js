function speak(phrase) {
  var output = phrase + ' for real!!!';
  console.log(output);
}

function yell(phrase) {
  var output = phrase.toUpperCase();
  speak(output);
}

yell('Ronaldo is better then Messi');
yell('Tomatoes are better than Apples.');
yell('Layton is Bowen\'s brother!');