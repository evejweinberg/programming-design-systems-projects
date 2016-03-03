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
    debug: false
});

//////◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆//////

var margin = 10;
var lots = []

var size = 4;


///////◼///◼///◼///◼///◼///◼///◼///◼///◼///◼///◼////◼////

var grid = r.grid({
    x: margin*2,
    y: margin*2,
    width: r.width-margin,
    height: r.height-margin,
    gutter: margin,
    //gutterWidth
    columns:12,
    rows: 12
});


////////////////////////////////////////////////


// for (var j = 1; j < grid.vars.columns; j++) {
// var addmegroup[j] = r.group(0, 0);
//     //run the function 40 times
//     for (var i = 0; i < 40; i++) {

//         var color = new Rune.Color(Rune.random(0, 255), Rune.random(0, 255), Rune.random(0, 255));
//         var x = Rune.random(size, grid.vars.moduleWidth - size);
//         var y = Rune.random(size, grid.vars.moduleHeight - size);
//         var anything = DoFunStuff(x, y, color, addmegroup[j]);
//         lots.push(anything)



//         // we use .ceil because numbers start at 1
//         var randomCol = Math.ceil(Rune.random(grid.vars.columns));
//         var randomRow = Math.ceil(Rune.random(grid.vars.rows));
        

//     }
//     grid.add(addmegroup[j], j, j)
//     console.log('adding '+ j)
// }
// 
for(var i = 0; i < grid.modules.length; i++) {
          var color = new Rune.Color(Rune.random(0, 255), Rune.random(0, 255), Rune.random(0, 255));
               var randomCol = Math.ceil(Rune.random(grid.vars.columns));
        var randomRow = Math.ceil(Rune.random(grid.vars.rows));
        var x = Rune.random(30, grid.vars.moduleWidth - 30);
       var y = Rune.random(30, grid.vars.moduleHeight - 30);

  DoFunStuff(x,y,color,grid.modules[i]);
}



function DoFunStuff(x, y, color, group) {
   //add fun stuff here
    r.rect(x, y, 30, 30, group).fill(color);
}

//turn the stage into SVGs
r.draw();
