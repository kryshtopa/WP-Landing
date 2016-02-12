// Runs scripts
$(document).ready(function(){

  if ( $(window).width() > 299 ) {
    enterText.init();
    gentleNav.init();
  }

});


// Ввод текста
var enterText = (function() {

  var init = function () {
    $('.section-3__input').bind("change paste keyup", function() {
      if ($(this).val().length < 300)
      $('.section-3__input-text').html($(this).val());
    });
  }

  return {
    init : init
  };

}());


// Плавная навигация
var gentleNav = (function() {

  var init = function () {
    $('a[href*=#]').bind('click', function(e) {
      e.preventDefault();

      var target = $(this).attr("href");

      $('html, body').stop().animate({ scrollTop: $(target).offset().top}, 700, function() {
        location.hash = target;
      });

      return false;
    });
  }

  return {
    init : init
  };

}());
