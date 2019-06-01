(function(window, document, $) {

  var discussion;
  var embed;
  var window_width = $(window).width();
  var hostname = window.location.hostname;
  var path = window.location.pathname;
  var rootPath = path.split('/')[1];

  if (path !== '/' && path !== '/global/r/' && path !== '/global/l/' && path !== '/realtime/'
			&& path !== '/statistics/' || 
      hostname === 'water.taiwanstat.com') {

    discussion = 
      '<discussion>' + 
      '<h3 id="discussion_title" style="margin-left: 20px;">數據討論區</h3>' + 
      '<div class="fb-comments" data-href="' + 
      document.location.href  + 
      '" data-width="100%" data-numposts="8"></div></discussion>';

    embed = 
      '<div id="embed" class="ui form" style="margin: 20px; width: 85%; float: left;">' +
      '<div class="field">' +
      '<label style="font-size: 20px; margin-bottom: 5px;">網頁嵌入碼</label>' +
      '<input type="text" style="font-size: 15px" value=\'' +
      '<iframe src="' + document.URL + '" width="800" height="600" frameborder="0"></iframe>\'>' +
      '</div></div>';

    $('#main-content').append(embed);
    $('#main-content').append(discussion);

    if(window.parent != window) {
      $("body").find(".fb-plugin").remove();
      $("body").find("discussion").remove();
      $("body").find("#embed").remove();
      $("body").find("header").remove();
      $("body").find("footer").remove();
      $("body").append("<div id='background'></div>");
    }

  }

  $('#layout-header').scroll(function() {
    $('footer').hide();
  });

  window.sendEmail = function() {
    var mail = 'mailto:contact@taiwanstat.com';
    var a = document.createElement('a');
    a.href = mail;
    a.click();

  };

   if (rootPath === 'realtime' || hostname == 'water.taiwanstat.com' || hostname == "localhost") {
     $('.mdl-layout--large-screen-only a:nth-child(1)').addClass('active');   
   }
   else if (hostname == 'long.taiwanstat.com' || rootPath === 'statistics') {
     $('.mdl-layout--large-screen-only a:nth-child(2)').addClass('active');   
   }
   else if (hostname == 'global.taiwanstat.com' || rootPath === 'global') {
   	 var subPath = path.split('/')[2];
     if (subPath == 'r') {
       $('.mdl-layout--large-screen-only a:nth-child(3)').addClass('active');
     }
     else if (subPath == 'l') {
       $('.mdl-layout--large-screen-only a:nth-child(4)').addClass('active');
     }
   }

})(window, document, jQuery);
