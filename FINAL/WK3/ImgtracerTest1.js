function traceImage(imgData) {
    // Synchronous tracing to SVG string
    // pass in the ctx.drawImage information as the imgData that you set when you called the function
    // do I ever change blurradius again?
    // all pixel processing happens inside of here
    svgstr = ImageTracer.imagedataToSVG(imgData, { pathomit: 52, lcpr: 0, scale: 1, blurradius: 40 });
}

///////////PUT EVERYTHING IN HERE///////////////
//////////////PUT EVERYTHING IN HERE///////////////
function callFullScene(val, spacing, colors) {

    if (svgstr === undefined) return;

    //create a new canvas, and once it's created...
    $('<div />', { id: 'canvas' }).appendTo('body').ready(function() {

        if (!val) {
            console.log("default preblur to 6")
            val = 6;
        }
        if (!spacing) {
            console.log("default spacing to 6px")
            spacing = 6
        }

        if (!val || !spacing) {
            console.log('one parameter is missing')
            $("#error-msg").text('One Parameter is Missing')
        } else if (val && spacing) {
            $("#error-msg").text('LOADING')
        }


        //make a run object inside the new div #canvas element
        var r = new Rune({
            container: "#canvas",
            width: inputImgWidth,
            height: inputImgHeight
        });

        var allstrokes = 4
        var strokecap = "round"

        //if they dont select any colors, make an object called colors
        //colors is the argument from the colorsOnly array abive, from the colorPicker
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
                { "r": 129, "g": 116, "b": 196, a: 255 }, //light purple
                { "r": 96, "g": 210, "b": 247, a: 255 },
                { "r": 71, "g": 65, "b": 64, a: 255 }
            ]

        }

        var colorsRune = []
            //convert these colors into Rune.Color objects so I can use them in my patterns

        for (var i = 0; i < colors.length; i++) {
            var transformedColor = new Rune.Color(colors[i].r, colors[i].g, colors[i].b)
            colorsRune.push(transformedColor)
        }

        // console.log(svgstr)
        //take these svgs and turn them into Rune objects -- paths
        var paths = svgToRune(String(svgstr));

        for (var i = 0; i < paths.length; i++) {

            // create polygons from the path
            var polygons = paths[i].toPolygons({ spacing: spacing });
            var poly = polygons[0];





            //  /__  ___/ //   ) )       //    ) ) //   ) ) 
            //    / /    //   / /       //    / / //   / /  
            //   / /    //   / /       //    / / //   / /   
            //  / /    //   / /       //    / / //   / /    
            // / /    ((___/ /       //____/ / ((___/ /     
            //find out how many polygons are of each color

            // if (poly.vars.fill.values.rgb[0] == colors[i].r) {
            //     console.log('i should push into' + i)

            // }
            ////////////////////////////////
            //change this to the closest color

            poly.vars.fill = colorsRune[Math.floor(Rune.random(colorsRune.length))]
                // poly.vars.fill = new Rune.Color(255,255,255)
                // poly.vars.stroke = new Rune.Color(0,0,0)
            poly.vars.stroke = false


            if (document.getElementById("lines").checked == true) {

                if (poly.vars.fill.values.rgb[0] == colors[0].r) {
                    console.log('DRAW LINES')
                    RunContains("lines", poly, Math.floor(Rune.random(2, colors.length - 1)))
                }
            }
            if (document.getElementById("dots").checked == true) {
                if (poly.vars.fill.values.rgb[0] == colors[3].r) {
                    var dotCol = Math.floor(Rune.random(0, colors.length - 1))
                    if (dotCol == 3) {
                        dotCol = 2
                    }

                    console.log(' DOTS' + dotCol)
                    RunContains("dots", poly, dotCol)
                }
            }

            if (document.getElementById("circles").checked == true) {
                if (poly.vars.fill.values.rgb[0] == colors[2].r) {
                    var dotCol = Math.floor(Rune.random(0, colors.length - 1))
                    if (dotCol == 2) {
                        dotCol = 3
                    }
                    console.log('DRAW CIRCLES')
                    RunContains("circles", poly, dotCol)
                }
            }

            if (document.getElementById("cross").checked == true) {
                if (poly.vars.fill.values.rgb[0] == colors[4].r) {

                    RunContains("cross", poly, colors.length - 5)
                }
            }


            // console.log(poly.vars.fill)

            poly.vars.vectors = simplify(polygons[0].vars.vectors, val, false);

            // remove the path from the stage
            paths[i].removeParent();

            if (document.getElementById("no-fill").checked == true) {

                r.stage.remove(poly)

            }
        } //stop going through paths


        r.draw();
        $("#error-msg").text(' ')





        /////////PATTERNS ////////////PATTERNS ////////////PATTERNS //////
        /////////PATTERNS ////////////PATTERNS ////////////PATTERNS //////
        /////////PATTERNS ////////////PATTERNS ////////////PATTERNS //////
        function RunContains(pattern, container, colIndex) {

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
            } //circles over
            else if (pattern == "cross") {

                for (var x = 2; x < r.width; x += size + 0.5) {
                    for (var y = 2; y < r.height; y += size + 0.5) {
                        // var rand = Math.round(Math.random()) * 2 - 1
                        // console.log( 'rand' + rand)
                        if (container.contains(x, y)) {

                            r.line(x, y, x + sizeMin, y + sizeMin).fill(colorsRune[colIndex]).stroke(colorsRune[colIndex]).strokeWidth(allstrokes).strokeCap(strokecap)

                            r.line(x + sizeMin, y, x, y + sizeMin).fill(colorsRune[colIndex]).stroke(colorsRune[colIndex]).strokeWidth(allstrokes).strokeCap(strokecap)


                        }
                    }
                }

            } //lines over

        }



        function svgToRune(svg) {
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
                    // .fill(255)
                    // .stroke(0)
                    .fill(parseInt(rgbFill[0]), parseInt(rgbFill[1]), parseInt(rgbFill[2]))
                    .stroke(parseInt(rgbStroke[0]), parseInt(rgbStroke[1]), parseInt(rgbStroke[2]))

                // loop through all path data and call corresponding Rune.js functions.
                var d = path.attr('d');
                var cmds = parsePath(d);

                var tempCol = {
                    0:parseInt(rgbFill[0]),
                    1:parseInt(rgbFill[1]),
                    2:parseInt(rgbFill[2])
                }
                tempCols.push(tempCol)

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
