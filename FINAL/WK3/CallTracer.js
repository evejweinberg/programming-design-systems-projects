function makeColorsArray(colorsIn) {
    var colorsOnly = [];
    _.each(colorsIn, function(v, k) {
        colorsOnly.push(v);
    });
    return colorsOnly;
}

function redrawPolys() {
    var val = parseInt(($("#myInput").val()));
    var spacing = parseInt(($("#newSpacing").val()));
    callFullScene(val, spacing, makeColorsArray(colorsAll));
}

$("#myButton").click(function() {
    $('#canvas').remove();

    if (svgstr !== undefined) {
        redrawPolys();
    }

    else {
        //dropZone element
        var reader = new FileReader();
        reader.onload = function(e) {
            //after image is read? 
            console.log('on load was called')
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext("2d");
            canvas.width = inputImgWidth;
            canvas.height = inputImgHeight;
            //is this dropzone or p5?
            //is this the image Data that gets passed in?
            var img = new Image();
            img.src = e.target.result;
            $('canvas').attr('id', 'yo');
            // $("#error-msg").text('LOADING')


            var btn2 = document.createElement("p"); // Create a <button> element
            var t = document.createTextNode("Loading"); // Create a text node
            btn2.appendChild(t);
            //add the words LOADING somehow here.. WTF!!!!

            (function() {
                if (img.complete) {
                    console.log('image is complete')
                    ctx.drawImage(img, 0, 0);
                    traceImage(ctx.getImageData(0, 0, inputImgWidth, inputImgHeight));
                    redrawPolys();
                    $("#error-msg").text('LOADING')
                } else {
                    setTimeout(arguments.callee, 50);
                    console.log('when does this happen?')
                }
            })();


        };
        reader.readAsDataURL(uploadedFile);
    }

});
