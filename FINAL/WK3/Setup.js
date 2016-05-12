var chosenColor;
var colorsAll = {};
var inputImgWidth = 1024;
var inputImgHeight = 1024;
var uploadedFile;
var tempCols = []

var myDropzone;
var svgstr = undefined;

$('#save').click(function() {
    //make this so it just downnloads the one canvas that I want
    crowbar();
});

function setTextColor(picker) {
    //every time a picker is chosen, push it into colorsAll

    colorsAll[picker.targetElement.id] = {
        r: Math.floor(picker.rgb[0]),
        g: Math.floor(picker.rgb[1]),
        b: Math.floor(picker.rgb[2]),
        a: 255
    };

    console.log('colorsAll is')
    console.log(colorsAll)
}