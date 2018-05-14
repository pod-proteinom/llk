// var KanjiArray = kanjis


var Card = (function Card(kanjilist) {
  var kanji;
  var $kanjifield;
  var $kanafield;
  var $translatefield;
  var $card;
  
  
  function init() {
    $kanjifield = $("#kanji");
    $kanafield = $("#kana");
    $translatefield = $("#translation");
    $card = $("#card");
    kanji = kanjilist;
    bindUI();
    newCard();
  }
  
  
  function bindUI() {
    $card.on("click", handleClick);  
  }
  
  
  function newCard() {
    var newKanji = _.sample(kanji);
    $kanjifield.html(newKanji.name);
    $kanafield.html(newKanji.kana);
    $translatefield.html(newKanji.english);
  }
  
  
  function handleClick() {
    var tl = new TimelineMax();
    tl.to($card, .3, {
      rotationY: 90
    });
    tl.add(newCard);
    tl.to($card, .3, {
      rotationY: 0
    });
  }
  
  
  var api = {
    init: init,
  }
  return api;
})(KanjiArray);


window.addEventListener("load", Card.init);
