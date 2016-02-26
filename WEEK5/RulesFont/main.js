//type a string here
//take out spaces in the string
//add commas
//

var r = new Rune({ container: "#canvas", width: $(window).width(), height: $(window).height(), debug: false });
$( "svg" ).children().addClass( "dropshadow" );

var threeD = false;
var letters = [T,H,E,space,R,U,L,E,S];
    for (var i = 0; i<letters.length; i++){
    letters[i](50+i*(letterW+kern), 200);
    }
    // r.draw();
    r.play();