/*! Cover.js | Full screen background support for IE8 and below */
(function($) {
  
  var $image, imageSize, imageAspectRatio, windowSize, windowAspectRatio,
      initialize = function() {
        $("html").css("background-image", "none");
        $image = $("#background-cover");
        $image.css("max-width", "none");
        $image.show();
        imageSize = {
          width: $image.data("width"),
          height: $image.data("height")
        },
        imageAspectRatio = imageSize.width / imageSize.height;
        $(window).resize(resizeAction).trigger('resize');
  		},
  		resizeAction = function() {
  			windowSize = {
  				height	: $(window).height(),
  				width	: $(window).width()
  			},
  			windowAspectRatio = windowSize.width / windowSize.height;
  			if (imageAspectRatio > windowAspectRatio) {
          $image.css('left', Math.min(((windowSize.width - imageSize.width * windowSize.height / imageSize.height) / 2), 0));
          $image.css('top', 0);
          $image.width('auto');
          $image.height('100%');
  			} else {
          $image.css('top', 0);
          $image.css('left', 0);
          $image.width('100%');
          $image.height('auto');
  			}
  		};
  
  if ($('html').css('background-size') !== 'cover') {
    $(initialize);
  }
  
})(jQuery);
