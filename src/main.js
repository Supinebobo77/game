var abc = 1000;

function speak(phrase) {
  var output = phrase + ' for real!!!';
  console.log(output);
}

function yell(phrase) {
  var output = phrase.toUpperCase();
  // This makes it so we don't have to copy the logic from the speak() function!
  speak(output);
}

yell('Ronaldo is better then Messi');
yell('Im pickle rick!!!!!!!!');

yell('Tomatoes are better than Apples.');
yell('Layton is Bowen\'s brother!');

abc += 50;

speak(abc);