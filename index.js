window.onload = function() {
  $('body').append('<ul id="bookmarks"></ul>')

  function process_bookmark(bookmarks) {
    for (var i = 0; i < bookmarks.length; i++) {
      for (var e = 0; e < 5; e++) $('#bookmarks').append(`<div class="bookmarkContainer"></div>`)
      var bookmark = bookmarks[i];
      if (bookmark.url) {
        if (i <= 19) $('#bookmarks .bookmarkContainer').eq(~~(i / 4)).append(`<li class="bookmark"><a href="${bookmark.url}">${bookmark.title}</a></li>`)
      }

      if (bookmark.children) {
        process_bookmark(bookmark.children);
      }
    }
  }
  chrome.bookmarks.getTree(process_bookmark);

  var firstColorArray = ['#1A535C', '#4ECDC4', '#F7FFF7', '#FF6B6B', '#FFE66D'];
  var secondColorArray = ['#0B132B', '#1C2541', '#3A506B', '#5BC0BE', '#6FFFE9'];
  var thirdColorArray = ['#102542', '#F87060', '#CDD7D6', '#B3A394', '#FFFFFF'];
  var bookmarks = $('.bookmark');


  setTimeout(function() {
    $('.bookmark').each(function(i) {
      // var item = secondColorArray[Math.floor(Math.random() * firstColorArray.length)];
      // $(this).css('background', item);
      // var info = $(this).text().trim();
      // var sub = info.substring(0, 8);
      // $(this).text(sub);
      var info = $(this).text().trim();
      if (info.length >= 17) {
        info = info.substr(0, 17) + '...';
      }
      $(this).find('a').text(info)
    });
  }, 10);

  //setting the colors for the different columns
  setTimeout(function() {
    $('.bookmarkContainer').each(function() {
      $(this).find('li').eq(0).css({
        "color": "#000",
        "background": "rgb(111, 255, 233)",
        "border": " 2px solid rgb(86, 205, 187)"
      });

      $(this).find('li').eq(1).css({
        "background": "rgb(91, 192, 190)",
        "border": " 2px solid rgb(61, 147, 134)"
      });

      $(this).find('li').eq(2).css({
        "background": "rgb(58, 80, 107)",
        "border": " 2px solid rgb(0, 0, 0)"
      });

      $(this).find('li').eq(3).css({
        "background": "rgb(28, 37, 65)",
        "border": " 2px solid rgb(139, 139, 139)"
      });
    });
  }, 10);

  //inserting break points after 6
  setTimeout(function() {
    $("li.bookmark:nth-child(6n)").each(function() {
      $(this).after("<br>");
    });
  }, 10);

  //adding target blank attribute to links
  setTimeout(function() {
    $("a").each(function() {
      $(this).attr('target', '_blank');
    });
  }, 10);


}