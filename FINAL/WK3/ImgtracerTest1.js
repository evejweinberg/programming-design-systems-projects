$('#save').click(function() {
    crowbar();
    console.log('save')


});


var chosenColor;
var colorsAll = {};
var inputImgWidth = 1024;
var inputImgHeight = 1024;

function setTextColor(picker) {

    colorsAll[picker.targetElement.id] = {
        r: picker.rgb[0],
        g: picker.rgb[1],
        b: picker.rgb[2],
        a: 255
    };
}

var uploadedFile;

$("#myButton").click(function() {
    $('#canvas').remove();

    var reader = new FileReader();
    reader.onload = function(e) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext("2d");
        canvas.width = inputImgWidth;
        canvas.height = inputImgHeight;
        // canvas.id = 'yo'
        var img = new Image();
        img.src = e.target.result;
        $('canvas').attr('id', 'yo');
        $("#error-msg").text('LOADING')


        var btn = document.createElement("p"); // Create a <button> element
        var t = document.createTextNode("Loading"); // Create a text node
        btn.appendChild(t); // Append the text to <button>
        (function() {
            if (img.complete) {

                var val = parseInt(($("#myInput").val()));
                var spacing = parseInt(($("#newSpacing").val()));


                // grab the colorsAll json object and turn it into an array
                var colorsOnly = [];
                _.each(colorsAll, function(v, k) {
                    colorsOnly.push(v);
                });
                console.log(colorsOnly)


                ctx.drawImage(img, 0, 0);
                callFullSene(ctx.getImageData(0, 0, inputImgWidth, inputImgHeight), val, spacing, colorsOnly);
            } else {
                setTimeout(arguments.callee, 50);
            }
        })();


    };
    reader.readAsDataURL(uploadedFile);


});


//callFullSene(400, 30, 11);
var myDropzone = new Dropzone("div#myDropzone", { url: "/" });
document.getElementById('myDropzone').setAttribute("style", "border:2px solid red; background-color: rgb(255, 125, 115); position: absolute; right: 22%");
var btn = document.createElement("p"); // Create a <button> element
var t = document.createTextNode("Click Here to add file"); // Create a text node
btn.appendChild(t); // Append the text to <button>
// document.getElementById('parameters').appendChild(document.getElementById('myDropzone'))
document.getElementById('myDropzone').appendChild(btn);
// myDropzone.on("removedfile", function (file){

// })
myDropzone.on("addedfile", function(file, xhr) {
    uploadedFile = file;
    btn.remove()
    console.log(file)
        // inputImgWidth = file.width
        // inputImgHeight = file.height
});

///////////PUT EVERYTHING IN HERE///////////////
//////////////PUT EVERYTHING IN HERE///////////////
function callFullSene(imgData, val, spacing, colors) {

    console.log('function was called')
    $("#error-msg").text('LOADING')


    $('<div />', { id: 'canvas' }).appendTo('body').ready(function() {

        if (!val) {
            console.log("i'm defaulting preblur to 6")
            val = 6;
        }
        if (!spacing) {
            console.log("i'm defaulting to 6px spacing")
            spacing = 6
        }

        if (!val || !spacing) {
            console.log('one parameter is missing')
            $("#error-msg").text('One Parameter is Missing')
                // $("#error-mesg").text('one parameter is missing')
        } else if (val && spacing) {
            // $("#error-msg").text('LOADING')
            console.log('they all exist')
            $("error-msg").text('LOADING')
        }



        var r = new Rune({
            container: "#canvas",
            width: inputImgWidth,
            height: inputImgHeight
        });

        var allstrokes = 4
        var strokecap = "round"

        //if they dont select any colors, make an object called colors
        if (colors.length == 0) {
            colors = [
           { "r": 59, "g": 59, "b": 59, a: 255 }, //0 grey
           { "r": 195, "g": 239, "b": 247, a: 255 }, //1 light blue
           { "r": 129, "g": 242, "b": 121, a: 255 }, //2 purple
           { "r": 255, "g": 224, "b": 233, a: 255 }, //3 light pink
           { "r": 209, "g": 88, "b": 48, a: 255 }, //drk orange
           { "r": 196, "g": 81, "b": 4, a: 255 }, //drk orange
           { "r": 240, "g": 209, "b": 98, a: 255 }, //yellow
           { "r": 255, "g": 146, "b": 110, a: 255 }, //light orange
           { "r": 227, "g": 148, "b": 170, a: 255 }, //drk pink
           { "r": 98, "g": 159, "b": 217, a: 255 },
           { "r": 98, "g": 84, "b": 171, a: 255 },
           { "r": 129, "g": 116, "b": 196, a: 255 },
           { "r": 96, "g": 210, "b": 247, a: 255 },
           { "r": 71, "g": 65, "b": 64, a: 255 }
       ]

       }

       var colorsRune = []

       for (var i =0; i< colors.length; i++) {
        console.log(colors[i].r)

           var transformedColor = new Rune.Color(colors[i].r, colors[i].g, colors[i].b)

           colorsRune.push(transformedColor)

           // console.log(colorsRune)


       }




            
       

        // console.log(colorsRune)
        // console.log(colors.length)


        // Synchronous tracing to SVG string
        var svgstr = ImageTracer.imagedataToSVG(imgData, { pal: colors, pathomit: 52, lcpr: 0, scale: 1, blurradius: 40 });

        // Appending SVG
        // ImageTracer.appendSVGString(svgstr, 'svgcontainer');

        var paths = svgToRune(String(svgstr));

        for (var i = 0; i < paths.length; i++) {

            // create polygons from the path
            var polygons = paths[i].toPolygons({ spacing: spacing });
            var poly = polygons[0];
            console.log(poly.vars.fill.values.rgb[0])


            //chang this to a number value



            if (document.getElementById("lines").checked == true) {
                // console.log('lines on',poly.vars.fill.values.rgb)
                if (poly.vars.fill.values.rgb[0] == colors[colors.length - 1].r) {
                    console.log('YES DRAW LINES')
                    RunContains("lines", poly, Math.floor(Rune.random(2, colors.length - 1)))
                }
            }
            if (document.getElementById("dots").checked == true) {
                            console.log('YES DRAW DOTS')
                if (poly.vars.fill.values.rgb[0][0] == colors[3].r) {

                    RunContains("dots", poly, 8)
                }
            }
            if (document.getElementById("circles").checked == true) {
                if (poly.vars.fill.values.rgb[0] == colors[colors.length - 2].r) {
                    // console.log('YES four')
                    RunContains("circles", poly, Math.floor(Rune.random(2, colors.length - 1)))
                }
            }

            // poly.vars.fill = colorsB[Math.floor(Rune.random(colorsB.length))] 
            poly.vars.stroke = false
                // console.log(poly.vars.fill)

            poly.vars.vectors = simplify(polygons[0].vars.vectors, val, false);

            // remove the path from the stage
            paths[i].removeParent();
        }


        r.draw();
        $("#error-msg").text(' ')



        function RunContains(pattern, container, colIndex) {
            console.log(colors[colIndex])
                //convert the colors objects back to an array

            var size = 15;
            var sizeMin = 8;
            if (pattern == "dots") {

                for (var x = 2; x < r.width; x += size + 0.5) {
                    for (var y = 2; y < r.height; y += size + 0.5) {
                        if (container.contains(x, y)) {
                            r.circle(x, y, 3).fill(colorsRune[colIndex]).stroke(false)

                        }
                    }
                }
            } else if (pattern == "lines") {



                for (var x = 2; x < r.width; x += size + 0.5) {
                    for (var y = 2; y < r.height; y += size + 0.5) {
                        var rand = Math.round(Math.random()) * 2 - 1
                            // console.log( 'rand' + rand)
                        if (container.contains(x, y)) {
                            if (rand == 1) {
                                r.line(x, y, x + sizeMin, y + sizeMin).fill(colorsRune[colIndex]).stroke(colorsRune[colIndex]).strokeWidth(allstrokes).strokeCap(strokecap)
                            } else {
                                r.line(x + sizeMin, y, x, y + sizeMin).fill(colorsRune[colIndex]).stroke(colorsRune[colIndex]).strokeWidth(allstrokes).strokeCap(strokecap)

                            }
                        }
                    }
                }

            } //lines over
            else if (pattern == "circles") {

                for (var x = 2; x < r.width; x += size + 5) {
                    for (var y = 2; y < r.height; y += size + 5) {
                        if (container.contains(x, y)) {
                            r.circle(x, y, sizeMin).stroke(colorsRune[colIndex]).fill(false).strokeWidth(allstrokes)

                        }
                    }
                }
            }

        }



        function svgToRune(svg) {
            // console.log(svg)
            // make jquery element from the svg element
            var jsvg = $(svg);

            var paths = [];

            // loop through each path in the svg
            jsvg.find('path').each(function() {

                // convert path to jquery element and get the fill
                // and stroke from the element
                var path = $(this);
                var rgbFill = path.attr('fill').replace('rgb(', '').replace('rgba(', '').replace(')', '').split(',');
                var rgbStroke = path.attr('stroke').replace('rgb(', '').replace('rgba(', '').replace(')', '').split(',');
                // console.log(rgbFill[0])
                // create new rune.js path
                var rpath = r.path(0, 0)
                    .fill(parseInt(rgbFill[0]), parseInt(rgbFill[1]), parseInt(rgbFill[2]))
                    .stroke(parseInt(rgbStroke[0]), parseInt(rgbStroke[1]), parseInt(rgbStroke[2]))

                // loop through all path data and call corresponding Rune.js functions.
                var d = path.attr('d');
                var cmds = parsePath(d);

                for (var i = 0; i < cmds.length; i++) {
                    var cmd = cmds[i];
                    if (cmd[0] == 'M') rpath.moveTo(cmd[1], cmd[2]);
                    else if (cmd[0] == 'L') rpath.lineTo(cmd[1], cmd[2]);
                    else if (cmd[0] == 'Q') rpath.curveTo(cmd[1], cmd[2], cmd[3], cmd[4]);
                    else if (cmd[0] == 'Z') rpath.closePath();
                }

                paths.push(rpath)

            });

            return paths;
        }




    })

}


////////////
