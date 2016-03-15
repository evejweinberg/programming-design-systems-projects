

var r = new Rune({
    container: "#canvas",
    width: 900,
    height: 1200,
    debug: true
});

//////◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆//////
 var jpg = new Rune.Pixels("poster.jpg");

///////◼///◼///◼///◼///◼///◼///◼///◼///◼///◼///◼////◼////




// r.draw();




jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });





jpg.load(function(err) {

  var size = 50;

  for(var x = 0; x < r.width; x += size)
  {
    for(var y = 0; y < r.height; y += size)
    {
      // we have to map the x,y values to the width and height
      // of the image.
      var imgX = Math.floor((x / r.width) * jpg.width);
      var imgY = Math.floor((y / r.height) * jpg.height);

      var backColor = jpg.get(imgX, imgY);
      var frontColor = backColor.copy().darken(0.3);

      r.rect(x, y, size, size)
        .fill(backColor)
        .stroke(false);

      r.rect(x + 10, y + 10, size - 20, size - 20)
        .fill(frontColor)
        .stroke(false)
        .rotate(45, x + (size/2), y + (size/2));
    }
  }

  r.draw();

});

