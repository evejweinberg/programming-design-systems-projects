var path = '../images/Faces_0.png'
// ImageTracer.imageToSVG( path, alert );


// Almost the same with options, and the ImageTracer.appendSVGString callback will append the SVG
// ImageTracer.imageToSVG( path, ImageTracer.appendSVGString, { ltres:0.1, qtres:1, scale:1 } );



// This appends the SVG to an element with id="svgcontainer"
// ImageTracer.imageToSVG(
//     path,
//     function(svgstr){ ImageTracer.appendSVGString( svgstr, 'svgcontainer' ); },
//     { numberofcolors:8 }
// );


// The helper function loadImage() loads an image to a canvas, then executing callback:
// appending the canvas to a div here.
// ImageTracer.loadImage(
//     path,
//     function(canvas){ (document.getElementById('canvascontainer')).appendChild(canvas); }
// );
// 
ImageTracer.loadImage(
    path,
    function(canvas){

        // Getting ImageData from canvas with the helper function getImgdata().
        var imgd = ImageTracer.getImgdata( canvas );

        // Synchronous tracing to SVG string
        var svgstr = ImageTracer.imagedataToSVG( imgd, { pathomit:152,lcpr:0,scale:1, numberofcolors:12, blurradius:10 } );

        // Appending SVG
        ImageTracer.appendSVGString( svgstr, 'svgcontainer' );

    }
);