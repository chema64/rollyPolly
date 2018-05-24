var rolly = require('rollypolly')

function doTheRoll(rollString) {
	rolly.graph(rollString, '#results', 100)
}

var theButton = document.querySelector('#trigger-button')

theButton.onclick = function() { 
	doTheRoll('1d6') 
}


// var arrayResults = test.parseRollString('2d6')
// console.log(arrayResults)

// var allPossibleRollResults = test.possibleRolls(arrayResults[0], arrayResults[1])
// console.log(allPossibleRollResults)

// var compactResults = test.compactResults(allPossibleRollResults)
// console.log(compactResults)


//  test.graph('5d5', '#results', 100)