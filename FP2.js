// Function Practice 2.1, logging the name only from a person constructor Function
function getName(name, age) {
  this.name = name
  this.age = age
  return this.name
}
console.log(getName("Will", 20))

// Function Practice 2.2, counting how many characters are in multiple strings
// of the same array.
var totalLetters = function(emptyArray) {
  var stringsLengths = emptyArray.join('').length
  return stringsLengths
}
console.log(totalLetters(['how', 'many', 'letters?']))

// Function Practice 2.3, creating an object that I can name a key AND a value.
function keyValue( key, value ) {
  this[key] = value
}
console.log(new keyValue("city", "Colorado Springs"))

// Function Practice 2.4, finding a specific position within an array, using
// an array and a negative number in the properties of the function.
var negativeIndex = function( array, negativeNumber ) {
  var positionFinder = array.length + negativeNumber
  return array[positionFinder]
}
console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -3))

// Function Practice 2.5, using a function to remove all "M's" from any inputed string.
var removeM = function(string) {
  var noMText = ""
  for (var i = 0; i < string.length; i++){
    if (string[i] === "m"){
      console.log("No M's")
    }
    else {
      noMText += string[i]
    }
  }
  console.log(noMText)
}
removeM("doe rey me")

// Function Practice 2.6, printing out a string using inputs from a functions
// parameters, and concatination.
function printObject(city, state, zip) {
  this.city = city,
  this.state = state,
  this.zip = zip,
  console.log("City is " + this.city + ", state is " + this.state + ", zip is " + this.zip + ".")
}
printObject("Fargo", "North Dakota", "50218")

// Function Practice 2.7, looping through a string to find only vowels.
var vowels = function( string ) {
  var noconsonants = []
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      noconsonants.push(string[i])
    }
    else if (string[i] === "e") {
      noconsonants.push(string[i])
    }
    else if (string[i] === "i") {
      noconsonants.push(string[i])
    }
    else if (string[i] === "o") {
      noconsonants.push(string[i])
    }
    else if (string[i] === "u") {
      noconsonants.push(string[i])
    }
  }
  return noconsonants
}
console.log(vowels("What evil odd ducks!"))

// Function Practice 2.8, a function that will check to see if pairs in an array
// match. If they do, it will return true, if they don't, it will return false.
var twins = function(newArray) {
  for(var i = 0; i < newArray.length; i+=2) {
    if (newArray[i] === newArray[i + 1]) {
    console.log("Looking good so far!")
  }
    else {
      return false
    }
  }
  return true
}
console.log(twins(["a", "a", "b", "b", "c", "c", "d", "d"]))


// Function Practice 2.9, checking to see if any boolieans are true. If any are
// true, the function will return true immedeatly. If not, for any reason, it will
// return false.
var or = function(array) {
  for (var i = 0; i < array.length; i++){
    if (array[i] === true){
      return true
    }
  }
  return false
}
console.log(or([true, false]));


// Function Practice 2.10, creating a new unique array of unique characters based
// off of the array that is input into the unique function.
var unique = function( array ) {
  var newUniqueArray = []
   for(var i = 0; i < array.length; i++) {
     if (newUniqueArray.indexOf(array[i]) === -1) {
       newUniqueArray.push(array[i])
     }
   }
   return newUniqueArray
}
console.log(unique(["a", "b", "a", "c", "d", "c", "e"]))
