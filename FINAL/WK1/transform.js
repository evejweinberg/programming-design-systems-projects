var r = new Rune({
    container: "#canvas",
    width: 600,
    height: 800,
    debug: false

});

// waterfall
var myImage = new Rune.Pixels("../../images/obama.jpg");
myImage.load(function() {

    var myImage = new Rune.Pixels("../../images/obama.jpg");
    myImage.load(function() {

        //draw here


        r.draw();
    })

})



// 
// 
// async.js
//async.parallel()
//
//
//






//to just display an image, but cant manipulate pixels
// r.image("../../images/obama.jpg",0,0,416,416)











// var num = 5
// var scaleupimage = 1


// var myImage = new Rune.Pixels("../../images/obama.jpg");
// myImage.load(function() {

//     for (var i = 0; i < myImage.width; i += num) {
//         for (var j = 0; j < myImage.height; j += num) {



//             //returns a color at this position

//             var col = myImage.get(i, j)
//             .rotate(50)

//             r.rect(i *scaleupimage, j* scaleupimage, num, num).stroke(false).fill(col)


//         }
//     }


//     r.draw();
// })







var num = 5
var scaleupimage = 1


var myImage = new Rune.Pixels("../../images/obama.jpg");
myImage.load(function() {


    for (var i = 0; i < 500; i += 1) {
      //start with some random positions
        var x = Math.floor(Rune.random(r.width))
        var y = Math.floor(Rune.random(r.height))
        map(col,x,y,imagex,imagey)
        var imagex = Math.floor((screenX/r.width)*myImage.width)
        var imagey = Math.floor((screenY/r.height)*myImage.height)

        var col = myImage.get(x,y)
        r.rect(x, y, 5, 5).fill(col)
    }


// function map(x1,y1,x2,y2){
// Math.floor((x2/r.width)*x1.width)


//   return value;
// }


    // for (var i = 0; i < myImage.width; i += num) {
    //     for (var j = 0; j < myImage.height; j += num) {



    //         //returns a color at this position

    //         var col = myImage.get(i, j)
    //         .rotate(50)

    //         r.rect(i *scaleupimage, j* scaleupimage, num, num).stroke(false).fill(col)


    //     }
    // }


    r.draw();
})



//var firstx = 
//var firsty = 
// polygons vs paths.
// paths. must use .moveTo
// polygons can start with Line.to
// if (i==0){
// myPath.moveTo(x,y)}else{
// myPath.lineTo(x.y)
// }
// at the end
// myPath.curveTo(0,0,myPath.vars.anchors[0].vec1.x,myPath.vars.anchors[0].vec1.y)
