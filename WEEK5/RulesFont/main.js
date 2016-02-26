//type a string here
//take out spaces in the string
//add commas
//

var r = new Rune({ container: "#canvas", width: $(window).width(), height: $(window).height(), 
	debug: true });
$( "svg" ).children().addClass( "dropshadow" );

// r.rect(0,0,r.width,r.height).fill(bgCol)
var threeD = false;
var letters = [T,H,E,space,R,U,L,E,S];



 r.on('mousemove', function(mouse) {
r.rect(0,0,r.width,r.height).fill(bgCol)
 	    for (var i = 0; i<letters.length; i++){
    letters[i](50+i*(letterW+kern), 200);
    }


    rowOfXs(r.width*.1,400);
  

   // r.play();


  
   	placementRand ++;
   	// = (mouse.x / r.width) * 360
 
});

r.play();