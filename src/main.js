/*
var abc = 1000;

function speak(phrase) {
  var output = phrase + ' for real!!!';
  console.log(output + '!!!!!!!!!!!!!!!!!!!!!!');
}

function yell(phrase) {
  var output = phrase.toUpperCase();
  // This makes it so we don't have to copy the logic from the speak() function!
  speak(output);
}

/!**
 * Comments 'n stuff
 *!/
yell('Ronaldo is better then Messi by far');
yell('Im pickle rick!!!!!!!!');
yell('Hi Layton');
yell('Yeaeaeah Baby Yeah');
yell('apples are better then oranges');
yell('Layton is Bowen\'s brother!');
yell('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHAhAHAHAhahhahahAHHAhahahAHhaHHHHHHH!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

abc += 50;

speak(abc);
yell('bowen has a game tomorrow -');
var abc = ['roanldo','neymar','alexis','griezmann'];

for(var i = 0; i < abc.length; i++) {
  var output = abc[i];
  speak(output);
}*/
var output = '';

var dar = ['coolio!', 'awesome', 'sick bro!', 'ahhhhhh!!!!!!', 'ouch!', 'coolio!', 'awesome', 'sick bro!', 'ahhhhhh!!!!!!', 'ouch!', 'coolio!', 'awesome', 'sick bro!', 'ahhhhhh!!!!!!', 'ouch!',];
console.log(dar);

for(var i = 0; i < dar.length; i++){
var item = dar[i];
output = output + ' ' + item;
}

console.log(output);

var final = 0;

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

for (var i = 0; i < numbers.length; i++) {
  final += numbers[i];
}
console.log(final);