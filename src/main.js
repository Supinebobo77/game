var enemyWordList = ['cool','fun','nice','dope','sick','fuck','flip','poop','music','flip','foop','doop','woop','coop'];
var hoard = [];
var bodyEl;
var enemiesPerRow = 3;

/**
 * Builds an enemy model into an instance
 * @param {string} word  The word to assign to the enemy
 * @param {HTMLElement} elref   The DOM element pertaining to this enemy
 * @returns {{word: *, element: *}}  An enemy instance
 */
function buildEnemy(word, elref) {
  return {
    word: word,
    element: elref,
    position: {
      x: 0,
      y: 0
    }
  }
}

/**
 * Creates all enemies.
 * @param {string[]} words  An array of words that are assigned to each enemy.
 */
function generateHoard(words) {
  for (var i = 0; i < words.length; i ++){
    var word = words[i];
    var element = document.createElement('div');
    var row = getRow(i, enemiesPerRow);
    var col = getCol(i, enemiesPerRow);
    element.classList.add('enemy');
    element.classList.add('row-' + row);
    element.classList.add('col-' + col);
    var enemy = buildEnemy(word,element);
    hoard.push(enemy);
    bodyEl.appendChild(enemy.element);
  }
}

/**
 * Returns the row that an enemy is in.
 * @param {number} index The index of the enemy in the enemy list.
 * @param {number} numEnemiesPerRow Number of enemies per row
 * @returns {number}
 */
function getRow(index, numEnemiesPerRow) {
  return Math.floor(index / numEnemiesPerRow) + 1;
}

/**
 * Returns the column that an enemy is in.
 * @param {number} index The index of the enemy in the enemy list.
 * @param {number} numEnemiesPerRow Number of enemies per row.
 * @returns {number}
 */
function getCol(index, numEnemiesPerRow) {
  var result = index / numEnemiesPerRow;
  var integer =  Math.floor(result);

  return Math.round(((result - integer) * 3)) + 1;
}

function main() {
  bodyEl = document.querySelector('body');
  generateHoard(enemyWordList);
  console.log(hoard);
}

window.addEventListener('load', main);