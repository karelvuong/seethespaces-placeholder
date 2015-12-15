//= require lib/bootstrap.min.js
//= require lib/moment.min.js
//= require lib/widow.min.js
//= require lib/zoom.min.js
//= require_tree

document.addEventListener("DOMContentLoaded", function(e) {
  (function() {
    $(window).scroll(function () {
      if ($('.header--space').length) {
        if ( $(window).scrollTop() > $('.header--space').offset().top) {
          $('.header--space').addClass('header--space--fixed');
        } else {
          $('.header--space').removeClass('header--space--fixed');
        }
      }
    });

    $('.js-share-facebook').click(function(event) {
      var width  = 575,
          height = 400,
          left   = ($(window).width()  - width)  / 2,
          top    = ($(window).height() - height) / 2,
          data   = {
          },
          url    = "https://www.facebook.com/sharer/sharer.php?u=" + data.url,
          opts   = 'status=1' +
                   ',width='  + width  +
                   ',height=' + height +
                   ',top='    + top    +
                   ',left='   + left;

      window.open(url, 'facebook', opts);

      return false;
    });

    $('.js-share-twitter').click(function(event) {
      var width  = 626,
          height = 436,
          left   = ($(window).width()  - width)  / 2,
          top    = ($(window).height() - height) / 2,
          data   = {
            "text": encodeURIComponent($(this).data("share-text"))
          },
          url    = "https://twitter.com/intent/tweet?text=" + data.text + "&url=" + data.url,
          opts   = 'status=1' +
                   ',width='  + width  +
                   ',height=' + height +
                   ',top='    + top    +
                   ',left='   + left;

      window.open(url, 'twitter', opts);

      return false;
    });
  })();
});
