//        __ __   ____  __________  ______________________________  _   __
//      _/_//_/  / __ \/ ____/ __ \/ ____/_  __/  _/_  __/  _/ __ \/ | / /  /_//_/
//    _/_//_/   / /_/ / __/ / /_/ / __/   / /  / /  / /  / // / / /  |/ /  /_//_/
//  _/_//_/    / _, _/ /___/ ____/ /___  / / _/ /  / / _/ // /_/ / /|  /  /_//_/
// /_//_/     /_/ |_/_____/_/   /_____/ /_/ /___/ /_/ /___/\____/_/ |_/  /_//_/
////////////////////////////////////////////////////////////////////////////////////                                                                       
var r = new Rune({
    container: "#canvas",
    width: 900,
    height: 1700,
    debug: false
});


// for (var i = 0; i < 100; i++) {
//     var x = i * 40;
//     x += Rune.random(-20, 20)
//     r.circle(x, 10, 10)
// }


// for (var i = 0; i < r.width; i += (Rune.random(10))) {
//     var x = i * 5;
//     x += Rune.random(-20, 20)
//     r.circle(x, 100, 10)
// }


// var spacing = Rune.random(10)
// for (var i = 0; i < r.width; i += spacing) {
//     var x = i * 5;
//     // x += Rune.random(-20, 20)
//     r.circle(x, 200, 10)
// }





//IF YOU DONT KNOW HOW MANY TIMES TO LOOP
// until the thing inside is false
// var x = 0;
// while (x < r.width) {
//     r.circle(x, 300, 5)
//     x += Rune.random(20)

// }


///////////////////////////////////////////////////////////////////////////////////////////
//  *******      **     ********** ********** ******** *******   ****     **  ********   //
// /**////**    ****   /////**/// /////**/// /**///// /**////** /**/**   /** **//////    //
// /**   /**   **//**      /**        /**    /**      /**   /** /**//**  /**/**          //
// /*******   **  //**     /**        /**    /******* /*******  /** //** /**/*********   //
// /**////   **********    /**        /**    /**////  /**///**  /**  //**/**////////**   //
// /**      /**//////**    /**        /**    /**      /**  //** /**   //****       /**   //
// /**      /**     /**    /**        /**    /********/**   //**/**    //*** ********    //
// //       //      //     //         //     //////// //     // //      /// ////////     //
///////////////////////////////////////////////////////////////////////////////////////////

// var circlesize = 30;
// var spacing = Rune.random(10)
// for (var x = 0; x < r.width; x += circlesize * 2) {
//     for (var y = 0; y < r.width; y += circlesize * 2) {

//         r.circle(x, y, circlesize)
//     }
// }




// var circlesize = 30;
// var spacing = Rune.random(10)
// for (var x = 0; x < r.width; x += circlesize * 2) {
//     for (var y = 0; y < r.width; y += circlesize * 2) {

//         // var even = y / circlesize;
//         // if even % 2 == 0

//         var circleX = x;
//         var even = y / circlesize % 2 == 0;

//         if (even) {
//             circleX -= circlesize
//                 // circlesize=circlesize*2
//         }

//         r.circle(x, y, circlesize).stroke(false).fill('hsv', x, y, 100)
//             // ill('hsv',x+y,40,100)
//             // fill hue with (x+y)

//     }
// }




//////////////////////////////////////////////////////////////////////////////////////////
//    ____    U _____ u   ____    _   _    ____     ____                U  ___ u  _   _     
// U |  _"\ u \| ___"|/U /"___|U |"|u| |U |  _"\ u / __"| u      ___     \/"_ \/ | \ |"|    
//  \| |_) |/  |  _|"  \| | u   \| |\| | \| |_) |/<\___ \/      |_"_|    | | | |<|  \| |>   
//   |  _ <    | |___   | |/__   | |_| |  |  _ <   u___) |       | | .-,_| |_| |U| |\  |u   
//   |_| \_\   |_____|   \____| <<\___/   |_| \_\  |____/>>    U/| |\u\_)-\___/  |_| \_|    
//   //   \\_  <<   >>  _// \\ (__) )(    //   \\_  )(  (__).-,_|___|_,-.  \\    ||   \\,-. 
//  (__)  (__)(__) (__)(__)(__)    (__)  (__)  (__)(__)      \_)-' '-(_/  (__)   (_")  (_/  
//////////////////////////////////////////////////////////////////////////////////////////
// var size = 500
function DrawStuff(size) {
    //draw your circle
    r.circle(r.width / 2, r.height / 2, size).fill(255, Rune.random(0,255), 0)
    //always have a rule tostop it!!
    if (size > 100) {
        //whatever was passed in, subtract 20 and call yourself 
        DrawStuff(size - 20)
    }

}
DrawStuff(400);







//OR this way
// var size = 400
// while (size > 50) {
//     r.circle(r.width / 2, r.height / 2, size).fill(255, 0, 0)
//     size -= 20

// }
// DrawStuff();






r.draw();
