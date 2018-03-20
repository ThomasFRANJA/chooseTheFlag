
var start = document.querySelector('button');
var pageGame = document.querySelector('#game-start');
var live = document.querySelectorAll('.lives is-active');
var flag = document.querySelectorAll('.flag');
var flagEnd = document.querySelector('.flag4');
var countrie = document.querySelector('.countrie');
var time = document.querySelector('.time');


start.addEventListener('click', function(){

  var otherFlags = [];
  var counter = 20;


   pageGame.classList.toggle('is-open');
   for (var i = 0; i < 4; i++) {
     var random = Math.floor(Math.random() * flags.length);
     var flagToFind = flags[random];
     flag[i].innerHTML = '<img src ='+flagToFind.src+'></img>';
     countrie.innerHTML = '<h2>'+flagToFind.name+'</h2>';

     // if (flagsToFind === ) {
     //
     // }
   }


});

//// nom egal au titre ////
////Front end job web questions (lien mickael)
//// CSS NEXT : http://cssnext.io/features/
