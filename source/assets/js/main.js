//= require lib/bootstrap.min.js
//= require lib/moment.min.js
//= require lib/jquery.scrolltofixed.min.js
//= require lib/zoom.min.js
//= require_tree

document.addEventListener("DOMContentLoaded", function(e) {
  (function() {
    // Fix header
    $(window).scroll(function () {
      if ($('.header--space').length) {
        if ( $(window).scrollTop() > $('.header--space').offset().top) {
          $('.header--space').addClass('header--fixed');
        } else {
          $('.header--space').removeClass('header--fixed');
        }
      }
    });


    $(".img--lazy").lazyload({
      effect: "fadeIn"
    });

    // Dock each letter as it arrives just below the docked header, pushing the
    // previous letter up the page.
    var letters = $('.block-list-letter-text');
    letters.each(function(i) {
      var letter = $(letters[i]);
      var next = letters[i + 1];

      letter.scrollToFixed({
        minWidth: 768,
        marginTop: 6,
        limit: function() {
          var limit = 0;
          if (next) {
            limit = $(next).offset().top - $(this).outerHeight(true) - 85;
          } else {
            limit = $(this).outerHeight(true) - 85;
          }
          return limit;
        },
        zIndex: 999
      });
    });

    $('.js-share-facebook').click(function(event) {
      var width  = 575,
          height = 400,
          left   = ($(window).width()  - width)  / 2,
          top    = ($(window).height() - height) / 2,
          data   = {
          },
          url    = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href,
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
          url    = "https://twitter.com/intent/tweet?text=" + data.text + "&url=" + window.location.href,
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
