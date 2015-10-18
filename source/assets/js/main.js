//= require lib/bootstrap.min.js
//= require lib/moment.min.js
//= require lib/widow.min.js
//= require lib/zoom.min.js
//= require_tree

document.addEventListener("DOMContentLoaded", function(e) {
  // Toggle sidebar
  (function() {
    var toggle = document.getElementsByClassName('js-toggle-sidebar'),
        toggleCount = toggle.length,
        sidebar = document.getElementsByClassName('site-sidebar')[0];

    for (var i = 0 ; i < toggleCount ; i++) {
      toggle[i].onclick = function() {
        toggleSidebarClass();
      }
    }

    function toggleSidebarClass() {
      var toggled = false;

      if (sidebar.classList)
        toggled = sidebar.classList.contains("active");
      else
        toggled = new RegExp('(^| )active( |$)', 'gi').test(sidebar.className);

      if (toggled) {
        if (sidebar.classList)
          sidebar.classList.remove("active");
        else
          sidebar.className = sidebar.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

        document.getElementById('toggleSidebar').dataset.glyph = "menu";
      } else {
        if (sidebar.classList)
          sidebar.classList.add("active");
        else
          sidebar.className += " active";

        document.getElementById('toggleSidebar').dataset.glyph = "x";
      }
    }

    $('.js-fb-popup').click(function(event) {
      var width  = 575,
          height = 400,
          left   = ($(window).width()  - width)  / 2,
          top    = ($(window).height() - height) / 2,
          data   = {
            "url": encodeURIComponent($(this).data("facebook-url"))
          },
          url    = "https://www.facebook.com/sharer/sharer.php?u=" + data.url,
          opts   = 'status=1' +
                   ',width='  + width  +
                   ',height=' + height +
                   ',top='    + top    +
                   ',left='   + left;

      window.open(url, 'facebook-share-dialog', opts);

      return false;
    });

    $('.js-tweet-popup').click(function(event) {
      var width  = 626,
          height = 436,
          left   = ($(window).width()  - width)  / 2,
          top    = ($(window).height() - height) / 2,
          data   = {
            "text": encodeURIComponent($(this).data("twitter-text")),
            "url": encodeURIComponent($(this).data("twitter-url")),
            "via": encodeURIComponent($(this).data("twitter-via")),
            "reply": encodeURIComponent($(this).data("twitter-in-reply-to"))
          },
          url    = "https://twitter.com/intent/tweet?text=" + data.text + "&url=" + data.url + "&related=" + data.via + "&in-reply-to=" + data.reply,
          opts   = 'status=1' +
                   ',width='  + width  +
                   ',height=' + height +
                   ',top='    + top    +
                   ',left='   + left;

      window.open(url, 'twitter', opts);

      return false;
    });
  })();

  // Run Moment to convert absolute times to relative
  (function () {
    var elTimeFromNow = document.getElementsByClassName("js-time-fromNow");

    [].forEach.call(elTimeFromNow, function(el) {
      var time = moment(el.dataset.time, "YYYY-MM-DD").fromNow();
      el.innerHTML = time;
    });
  })();
});
