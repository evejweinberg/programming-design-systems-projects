//https://runemadsen.github.io/rune.js/documentation.html#runegrid
// _____________________________________________________________________________________________________
//       __     ____       __   _____          __     _     _     __   ______   _____    _   _      __  
//     /    )   /    )     /    /    )       /    )   |    /    /    )   /      /    '   /  /|    /    )
// ---/--------/___ /-----/----/----/--------\--------|---/-----\-------/------/__------/| /-|----\-----
//   /  --,   /    |     /    /    /          \       |  /       \     /      /        / |/  |     \    
// _(____/___/_____|__ _/_ __/____/_______(____/______|_/____(____/___/______/____ ___/__/___|_(____/___
//                                                     /                                                
//   

var r = new Rune({
    container: "#canvas",
    width: $(window).width(),
    height: $(window).height(),
    debug: true
});

//////◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆//////


var grid = r.grid({
  x: 50,
  y: 50,
  width: 600,
  moduleHeight: 200,
  gutter: 60,
  columns: 3,
  rows: 3
});


var margin = 50


var grid2 = r.grid({
  x: margin,
  y: margin,
  width: r.width - (2*margin),
  moduleHeight: r.height - (2*margin),
  gutter: 60,
  columns: 3,
  rows: 3
});




///////◼///◼///◼///◼///◼///◼///◼///◼///◼///◼///◼////◼////

rect = r.rect(0,0,100,100)
rect2 = r.rect(10,10,100,100)
rect3 = r.rect(grid.vars.moduleWidth/2-25,grid.vars.moduleHeight/2-25,50,50)
grid.add(rect,2,2) //columns, then rows
grid.add(rect2,3,2)
grid.add(rect3,1,1)
// grid.rotate(45,r.width/2,r.height/2)







////////////////////////////////////////////////

var size = 4;

for(var i = 0; i < 2000; i++)
{
  var color = new Rune.Color(Rune.random(0, 255), Rune.random(0, 255), Rune.random(0, 255));
  var x = Rune.random(size, grid.vars.moduleWidth - size);
  var y = Rune.random(size, grid.vars.moduleHeight - size);
  var circle = r.circle(x, y, size).fill(color).stroke(false);

  // we use .ceil because numbers start at 1
  var randomCol = Math.ceil(Rune.random(grid.vars.columns));
  var randomRow = Math.ceil(Rune.random(grid.vars.rows));
  grid.add(circle, randomCol, randomRow);
}

//turn the stage into SVGs
r.draw();








                                                                                             
