//type a string here
//take out spaces in the string
//add commas
//

var r = new Rune({
    container: "#canvas",
    width: $(window).width(),
    height: $(window).height(),
    debug: false
});


//// STAGE GRAPH is what you set to the stage
////▱▣ ▣ ▣ ▣ ▣  ▣ ▣ ▣  ▣ ▣ ▣ ▣ ◍ /// ◠ ◠ // ◠
///■//vectors///◃◃◃◃◃◃///◍ ◍ ◍ ◍//
/////https://runemadsen.github.io/rune.js/documentation.html#multiplyvector
/// ◵ ◵  ◵ ◵ ◖  ◪ ◪ ◟  ◙ /////// ◘ /// ◘ ///////
/// //https://en.wikipedia.org/wiki/Geometric_Shapes
/// ◯ ◯ ◯ ◯ ◯ ◯ ◯ ◯ ◯ ◯ ◯
/// 
/// 

// ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ ◣ //
/// Create a rectangle to fill the entire screen ◉◉ ◉ ◉ ◉ ◉ ◉ ◉
// and a smaller rectangle on top
// //◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆
var grid = r.grid({
  x: 50,
  y: 50,
  width: r.width - 100,
  height: r.height - 100,
  gutter: 20,
  columns: 3,
  rows: 3
});

var size = 40;

for(var i = 0; i < 50; i++)
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







// _____________________________________________________________________________________________________
//       __     ____       __   _____          __     _     _     __   ______   _____    _   _      __  
//     /    )   /    )     /    /    )       /    )   |    /    /    )   /      /    '   /  /|    /    )
// ---/--------/___ /-----/----/----/--------\--------|---/-----\-------/------/__------/| /-|----\-----
//   /  --,   /    |     /    /    /          \       |  /       \     /      /        / |/  |     \    
// _(____/___/_____|__ _/_ __/____/_______(____/______|_/____(____/___/______/____ ___/__/___|_(____/___
//                                                     /                                                
//                                                 (_ /                                                 
                
//   ___ _   _____ 
//  / _ \ | / / _ \
// /  __/ |/ /  __/
// \___/|___/\___/ 
                
/////////////////////////////////////////////
//      ___  ___       ___   _   __   _    //
//     /   |/   |     /   | | | |  \ | |   //
//    / /|   /| |    / /| | | | |   \| |   //
//   / / |__/ | |   / / | | | | | |\   |   //
//  / /       | |  / /  | | | | | | \  |   //
// /_/        |_| /_/   |_| |_| |_|  \_|   //
//                                         //
/////////////////////////////////////////////
///
// ///
//  _______           _______ 
// (  ____ \|\     /|(  ____ \
// | (    \/| )   ( || (    \/
// | (__    | |   | || (__    
// |  __)   ( (   ) )|  __)   
// | (       \ \_/ / | (      
// | (____/\  \   /  | (____/\
// (_______/   \_/   (_______/

//        .-.                                   .----.                           
//       / (_)                                    /   `                          
//      /      .-._.).--..-..  .-. .-.           /     .-.  .  )  ( .  .-. .-.   
//     /      (   )/   ./.-'_)/   )   )         /      /  )/ \(    ) )/   )   )  
//  .-/.    .-.`-'/    (__.''/   /   (         /      /`-'/ ._)`--':'/   /   (   
// (_/ `-._.                          `-' .---------'/   /                    `-'
