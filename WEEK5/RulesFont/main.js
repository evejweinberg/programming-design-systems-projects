//type a string here
//take out spaces in the string
//add commas
//

var r = new Rune({
    container: "#canvas",
    width: $(window).width(),
    height: $(window).height(),
    debug: true
});
$("svg").children().addClass("dropshadow");

// r.rect(0,0,r.width,r.height).fill(bgCol)
var threeD = false;
// var letters = [I,N,S,T,A,L,A,P,S,E];

var letters = [T, H, E, space, R, U, L, E, S,space,O,F];
var lettersOF = [O,F];
var lettersRow2 = [A,R,T,space,S,C,H,O,O,L];



r.on('mousemove', function(mouse) {
	r.stage.children = [];
    r.rect(0, 0, r.width, r.height).fill(bgCol)
 var lengthStartRow1 = r.width/2-((letters.length*letterW)+(letters.length*kern))/2;
   
    for (var i = 0; i < letters.length; i++) {
        letters[i](50 + i * (letterW + kern), 200);
    }


var lengthStart = r.width/2-((lettersRow2.length*letterW)+(lettersRow2.length*kern))/2;
    rowOfXs(r.width/2-(520), 400);
     for (var i = 0; i < lettersRow2.length; i++) {
        lettersRow2[i](lengthStart+ i * (letterW + kern), 460);
    }


   var center = r.width/2
   if(Math.abs(center-mouse.x)>200){
if (mouse.x % 200){
    placementRand=0 
    // placementRand = .4*Math.abs(center-mouse.x)
}
} else{
    placementRand=0 
}


});

r.play();
