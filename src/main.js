var spaceship = {
  fire: function (evt) {
    if(evt.key === "a") {
      console.log(evt.key);
    }
  }
};

function main(){
  window.addEventListener('keydown',spaceship.fire);
}
main();

