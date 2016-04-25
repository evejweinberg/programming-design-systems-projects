var path = '../images/Faces_2.png'

var r = new Rune({
    container: "#canvas",
    width: 1024,
    height: 1024
});

ImageTracer.loadImage(
    path,
    function(canvas) {

        // Getting ImageData from canvas with the helper function getImgdata().
        var imgd = ImageTracer.getImgdata(canvas);

        // Synchronous tracing to SVG string
        var svgstr = ImageTracer.imagedataToSVG(imgd, { pathomit: 152, lcpr: 0, scale: 1, numberofcolors: 8, blurradius: 40 });

        // Appending SVG
        // ImageTracer.appendSVGString(svgstr, 'svgcontainer');

        console.log(String(svgstr))
        return svgToRune(svgstr)

        // svgstr.length is 263794
        
        // var commands = svgstr.split(/(?=[LMCQ])/);
        // console.log(commands)

        // var pointArrays = commands.map(function(d) {
        //     var pointsArray = d.slice(1, d.length).split(',');
        //     var pairsArray = [];
        //     for (var i = 0; i < pointsArray.length; i += 2) {
        //         pairsArray.push([+pointsArray[i], +pointsArray[i + 1]]);
        //     }
        //     return pairsArray;
        // });
        // console.log(pointArrays)
        // var newdata = svgstr.node();
        // console.log(newdata)

    }
);






function svgToRune(svg) {

  // make jquery element from the svg element
  var jsvg = $(svg);

  // loop through each path in the svg
  jsvg.find('path').each(function() {

    // convert path to jquery element and get the fill
    // and stroke from the element
    var path = $(this);
    var rgbFill = path.attr('fill').replace('rgb(', '').replace('rgba(', '').replace(')', '').split(',');
    var rgbStroke = path.attr('stroke').replace('rgb(', '').replace('rgba(', '').replace(')', '').split(',');

    // create new rune.js path
    var rpath = r.path(0, 0)
      .fill(parseInt(rgbFill[0]), parseInt(rgbFill[1]), parseInt(rgbFill[2]))
      .stroke(parseInt(rgbStroke[0]), parseInt(rgbStroke[1]), parseInt(rgbStroke[2]))

    // loop through all path data and call corresponding Rune.js functions.
    var d = path.attr('d');
    var cmds = parsePath(d);
    for(var i = 0; i < cmds.length; i++) {
      var cmd = cmds[i];
      if(cmd[0] == 'M')      rpath.moveTo(cmd[1], cmd[2]);
      else if(cmd[0] == 'L') rpath.lineTo(cmd[1], cmd[2]);
      else if(cmd[0] == 'Q') rpath.curveTo(cmd[1], cmd[2], cmd[3], cmd[4]);
      else if(cmd[0] == 'Z') rpath.closePath();
    }
  });

  r.draw();
}
