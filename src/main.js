function buildEnemy(word, elref) {
  return {
    word: word,
    element: elref
  }
}
var enemyWordList = ['cool','fun','nice','dope','sick','fuck','flip','poop','music'];
var hoard = [];
var bodyEl;

function generateHoard(words) {
  for (var i = 0; i < words.length; i ++){
    var word = words[i];
    var element = document.createElement('div');
    element.classList.add('enemy');
    var enemy = buildEnemy(word,element);
    hoard.push(enemy);
    bodyEl.appendChild(enemy.element);
  }
}

window.addEventListener('load',function () {
  bodyEl = document.querySelector('body');
  generateHoard(enemyWordList);
  console.log(hoard);
});
