var r = new Rune({
    container: "#canvas",
    width: 900,
    height: 1700,
    debug: false
});

var rects = []


for (var i = 0; i < 20; i++) {

    var myrect = r.rect(Rune.random(r.width), Rune.random(r.height), 20, 20)
    rects.push(myrect)
}






r.on('draw', function() {




    for (var i = 0; i < rects.length; i++) {
        rects[i].vars.x +=3



        if(rects[i].vars.x>r.width){
            rects[i].vars.x=-50
              rects[i].vars.y=Rune.random(r.height)
        }
    }

})


r.play();
