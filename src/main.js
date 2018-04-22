var spaceship = {
  fire: function (evt) {
    if(evt.key === "a") {
      console.log(evt.key);
    }
  }
};



var enemies = [];
var alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (var i = 0; i < 5; i++){
  var  enemy = {letters: []};

  for (var j = 0; j < 5; j ++){
    var idx = Math.floor(Math.random() * 25);
    enemy.letters.push(alph[idx])
  }

  enemies.push(enemy)

}




function main(){
  window.addEventListener('keydown',spaceship.fire);
}
main();



