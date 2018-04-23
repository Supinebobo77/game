var spaceship = {
  currentTarget: null,

  fire: function (evt) {
    var letter = evt.key;
    if(!spaceship.currentTarget) {
     spaceship.currentTarget = spaceship.acquireTarget(letter);
    }

    if (spaceship.currentTarget){

      var enemy = spaceship.currentTarget;
      if (letter === enemy.letters[0]) {
        enemy.letters.shift();
        console.log("HIT!", enemy.letters.join(', '));

      }
      else{
        console.log("miss :(");
      }
      if (!enemy.letters.length){
        var idx = enemies.indexOf(enemy);
        enemies.splice(idx, 1);
        spaceship.currentTarget = null;
        console.log("KILLED AN ENEMY !!!:-)");
        console.log('Remaining enemies:');
        logEnemies();
      }
      if(!enemies.length) {
        console.log('CONGRATULATIONS, YOU SAVED THE UNIVERSE!!!');
        console.log('YOU WON!!!!!!!!! :D FREE food FOREVER!');
      }
    }
  },

  acquireTarget: function (key){
    for (var i = 0; i < enemies.length; i++){
      var enemy = enemies[i];
      if (key === enemy.letters[0]){
        console.log("TARGET ACQUIRED",enemy);
        return enemy;
      }
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

function logEnemies() {
  for (var i = 0; i < enemies.length; i++) {
    console.log(enemies[i].letters.join(','));
  }
}



function main(){
  window.addEventListener('keydown',spaceship.fire);
  console.log('Incoming Enemise!!!');
  logEnemies();
}
main();



