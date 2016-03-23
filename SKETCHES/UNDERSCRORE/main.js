//http://underscorejs.org/

var r = new Rune({
    container: "#canvas",
    width: 1000,
    height: 1000,
    debug: true
});

r.draw();

var myColors = [];
var myNumbers = [];

for (var i = 0; i < 9; i++) {
    myNumbers.push(Math.round(Rune.random(0, 5000)));

}


////LONG WAY TO DO IT

var max = 0;
for (var i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] > max) {
        max = myNumbers[i]
    }
}

// console.log(myNumbers)
// console.log('max' + max)



//////FASTER WAY!

// _max(list,[iteratee],)
var max2 = _.max(myNumbers)
// console.log(max2)

/////MORE!!!


var names = ["Shir","Rune","Grace","Steve", "Eve", "Zach"];
var sortedNames = _.sortBy(names);
// console.log(sortedNames)


var indexIt = _.indexOf(names, "Eve");
// console.log(indexIt)


///in 'collections'////THESE ARE COOL ////////

var newNames = [];
//this is the old way! dont do this anymore
// for (var i=0;i<names.length;i++){
//     newNames.push("Name:"+ names[i]+ " Weinberg");
// }
// console.log(newNames)



// change this array 'names' by calling this anonymous function
var newNamesBetter = _.map(names, function(item){
    return item + " Weinberg"
});

var newNamesBetter2 = _.filter(names, function(item){
    return item[0] == "E" 
});

console.log('i made this array faster '+newNamesBetter)
console.log(newNamesBetter2)


//we can replace for loop like this now!
_.each(names, function(item){
    console.log(item)
})


// console.log(_.isObject("Rune"))





