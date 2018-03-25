function speak(phrase) {
  var output = phrase + ' for real!!!';
  console.log(output);
}

function yell(phrase) {
  var output = phrase.toUpperCase();
  speak(output);
}

yell('Ronaldo is better then Messi');
yell('Im pickle rick!!!!!!!!');
yell('Layton is Bowen\'s brother!');