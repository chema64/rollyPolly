
var { parseRollString } = require('rollypolly')

// var theCowsayLibrary = require('cowsay')

var { think } = require('cowsay')

console.log(   think({ text: 'asdf' })   )




var list = parseRollString('1d6')
console.log(list)

// var possibleResults = r.possibleRolls(list[0], list[1])
// console.log(possibleResults)


// var theName = 20

// var anObject = {
// 	theName: theName
// }

// var anObject = { theName }

// console.log(anObject)