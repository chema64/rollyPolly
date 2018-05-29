/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar rolly = __webpack_require__(/*! rollypolly */ \"./node_modules/rollypolly/index.js\")\n\n\nfunction doTheRoll(rollString) {\n\trolly.graph(rollString, '#results', 100)\n}\n\nwindow.doTheRoll = doTheRoll \n\nvar theButton = document.querySelector('#trigger-button')\n\ntheButton.onclick = function() { \n\tdoTheRoll('1d6') \n}\n\n// function doit(rollString) {\n// \ttest.graph(rollString, '#results', 100)\n// }\n\n// function showMessage(msg) {\n// \talert(msg)\n// }\n\n// function innerSecretStuff() { \n// \tconsole.log('secret stuff')\n// }\n\n\n// var toolkit = {\n// \tdoit: doit,\n// \tshowMessage: showMessage\n// }\n\n// window.appTools_2018_12_12 = toolkit\n\n// if (window.appTools) {\n// \tconsole.log(\"there's already something called appTools, installing as 'window.appTools_2018_12_12_specialBackupName'.\")\n// } else {\n// \twindow.appTools = toolkit\n\n// }\n\n\n// var arrayResults = test.parseRollString('2d6')\n// console.log(arrayResults)\n\n// var allPossibleRollResults = test.possibleRolls(arrayResults[0], arrayResults[1])\n// console.log(allPossibleRollResults)\n\n// var compactResults = test.compactResults(allPossibleRollResults)\n// console.log(compactResults)\n\n\n// test.graph('5d5', '#results', 100)\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./node_modules/rollypolly/index.js":
/*!******************************************!*\
  !*** ./node_modules/rollypolly/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// ===================== js =====================\n\n// ----------------------------------------------\n\t/*  diceRollResultsList:\n\n\tUsing the inputs of numberOfDice and diceSides, values for each possible roll result or \n\trollOutcome is populated into an array. \n\tFor example 1d6 sided dice roll will produce [1,2,3,4,5,6]. This array can then be \n\tpassed to createDiceRollProbability function, to create a rollCount value.\n\n\tReturns an array: [oldList[] which contains all possible dice rolls, from the number of \n\tdice and dice sides]\n\t*/\nfunction diceRollResultsList(numberOfDice, diceSides) {\n\n    //setting oldList to zero allows oldList to be populated during first loop\n    let oldList = [0]\n    let freshList = []\n\n    //number of times dice are rolled\n    for (var nextRoll = 1; nextRoll <= numberOfDice; nextRoll++) {\n    \t// each run of this loop adds another dice roll to the result set\n\n        // initialize freshList\n        freshList = []\n\n        // for each result we have SO FAR, add to newList each of the possible results\n        // that come from that old result plus one more dice roll.\n        oldList.forEach( function(oldRes) {\n            for (var possibleResult = 1; possibleResult <= diceSides; possibleResult++) {\n                freshList.push(oldRes + possibleResult)\n            }\n        })\n        \n        // set oldList with latest results set stored in freshList \n        oldList = freshList\n    }\n\n    if (oldList.length === 0) {\n    \treturn [0]\n    } else {\n\t    return oldList\n    }\n\n}\n\n// ----------------------------------------------\n\t/* createDiceRollProbability:\n\n\tThis processes the rawData array, and returns an array where \n\tthe value at a given array index is the count of the number \n\tof times that value shows up. The array index value represents \n\ta dice roll result or value. For example index value \n\tresultCount[6], represents a dice roll value of 6.  \n\tFor example if 6 is rolled twice then the resultCountresultCount \n\tvalue at resultCount[6] will be 2.\t\n\n\tReturns an array: [resultCount[] which contains a roll count value for each index value in\n\tthe array. As explained above in this array each index value represents a dice roll value]\n\t*/\nfunction createDiceRollProbability(rawData) {\n    \n    let resultCount = [] \n\n    rawData.forEach(function(rawResult) {\n\n\t    if(resultCount[rawResult]) {\n\t    \t// if we've counted this result before, increment it\n\t        resultCount[rawResult] += 1;\n\t    } else {\n\t    \t// if this is the first time we've seen this result, its count is 1\n\t        resultCount[rawResult] = 1;\n\t    }\n    });\n\n    return resultCount\n\n}\n\n\n// ----------------------------------------------\n    /* printProbabilityTable:\n\n\tGiven an array where the value at a given index\n\tis the times that index will show up as a result\n\t(as returned by createDiceRollProbability(...)),\n\tproduce a nice looking table of results including\n\ta pretty graph.\n\n\tif the result is \"roll\", the number of times\n\troll occurs is \"rollCount\".. the table includes \n\tthese columns:\n    \n    - roll\n    - ratio  (rollCount / totalRollCount)\n    - percentage  (rollCount / totalRollCount)\n    - div bar chart (rollCount /  highestRollCount * 100)\n\n    Returns false : [False value is returned if\n    validateInput function returns false] \n\n    */ \nfunction printProbabilityTable(resultData, wrapperElement, graphWidth, heading='Results') {\n\n    let table = document.createElement(\"table\")\n\n    //add table header\n\tlet tr = document.createElement('tr')\n\tlet th = document.createElement('th')\n\tth.colSpan = 4\n\tth.innerHTML = heading\n\ttr.appendChild(th)\n\ttable.insertAdjacentElement('afterbegin', tr)\n\n\t//add table to wrapper element\n    wrapperElement.appendChild(table)\n\n    // document.body.appendChild(table)\n  \n    let totalRollCount = 0 // sum of all rollCounts\n    let highestRollCount = 0 // max of rollCounts\n\n    //\n    // first, work out total and max.\n    //\n\n    //Find the totalRollCount and highestRollCount from rollCount\n    resultData.forEach(function(rollCount) {\n    \t// do two things in this loop:\n    \t// ..sum up the total roll counts\n        totalRollCount += rollCount\n        // ..remember the highest we've seen\n        if( highestRollCount < rollCount) {\n             highestRollCount = rollCount\n        }\n    })\n\n    //\n    // now make the actual table\n    //\n\n\tresultData.forEach( function(rollCount, rollOutcome) {\n\t\tconst tr = produceOneRow(rollOutcome, rollCount, highestRollCount, totalRollCount, graphWidth)\n\t\ttable.appendChild(tr)\n\t})\n\n\n}\n\n\n// ----------------------------------------------\n\nfunction produceOneRow(outcome, count, highestCount, totalCount, maxGraphBarLength) {\n\t// ...\n\t// const maxGraphBarLength = 400\n\t// make the row\n\tvar tr = document.createElement(\"tr\")\n\t// table.appendChild(tr)\n\n\t// do the rollOutcome cell\n\tvar rollOutcomeCell = document.createElement(\"td\")\n\trollOutcomeCell.innerHTML = outcome\n\ttr.appendChild(rollOutcomeCell)\n\n\t// do the ratio cell\n\tvar ratioCell = document.createElement(\"td\")\n\tratioCell.innerHTML = count  + '/' + totalCount\n\ttr.appendChild(ratioCell)\n\n\t// do the percentage cell\n\tvar ratioCell = document.createElement(\"td\")\n\tratioCell.innerHTML = Math.round(count / totalCount * 1000)/10 + '%'\n\ttr.appendChild(ratioCell)\n\n\t// do the graph bar cell\n\tvar divCell = document.createElement(\"td\")\n\tvar div = document.createElement(\"div\")\n\n\tvar divWidth = count / highestCount * maxGraphBarLength\n\n\tdiv.style.width = divWidth + \"px\"\n\tdiv.style.height = \"0.4em\"\n\tdiv.style.backgroundColor = \"steelblue\"\n\n    // height: 0.4em;\n    // background-color: steelblue;\n\n\n\n\t//attach div element to table cell \n\tdivCell.appendChild(div)\n\ttr.appendChild(divCell)\n\n\treturn tr\n}\n\n// ----------------------------------------------\n/*\n\tinput string now supports 2 primative number values at the start and end of input string.\n\tA single case insensitive character still separates these two number values. \n\treturns false if the input string is unrecognisable, otherwise\n\treturns a two element array of integers [numRolls, diceSides]\n*/\nfunction parseInput(inputString) {\n\n\t// validate inputString\n\tlet inputArray = []\n\tconst diceMatcher = RegExp(/^([1-9][0-9]?)(d)([1-9][0-9]?)$/i)\n\t\n\tif(typeof inputString === \"string\") {\n\t\tinputString = inputString.trim().toLowerCase()\n\t}\n\telse {\n\t\treturn false\n\t}\n\n\tlet inputMatches = diceMatcher.exec(inputString)\n\n\tif (inputMatches) {\n\t\t// parse into array\n\t\tinputArray[0] = parseInt(inputMatches[1], 10)\n\t\tinputArray[1] = parseInt(inputMatches[3], 10)\n\n\t\t// return array\n\t\treturn inputArray\n\t} else {\n\t\treturn false\n\t}\n\t\n}\n// ----------------------------------------------\n/*\n\tproduces a nice looking graph of dice roll probabilities.\n\tuser specifies:\n\t- rollString: a string of the form [rolls]d[sides], eg. 3d6\n\t- destinationElement: either a query string or a HTML element\n\t\tinside of which the graph will be inserted\n\t- graphBarWidth: if specified, the max length (in pixels) of \n\t\tthe graph's longest bar.  If not specified, defaults to 200.\n\n\treturns false if the string isn't a valid roll string; otherwise\n\treturns a reference to the graph's table element.\n*/\nfunction graphRoll(rollString, destinationElement, graphBarWidth=400) {\n\t\n\n\tlet inputArray = []\n\tlet selectElement = \"\"\n\tlet rawData = []\n\tlet probabilityData = []\n\n\t// understand rollString\n\tinputArray = parseInput(rollString)\n\t// check if this is falsy\n\tif(!inputArray) {\n\t\tthrow 'input dice roll string is invalid: ' + inputArray\n\t\treturn false\n\t}\n\n\t// have destinationElement\n\tselectElement = destinationCheck(destinationElement)\n\tif (!selectElement) {\n\t\tthrow 'specified element not found: ' + destinationElement\n\t\treturn false\n\t}\n\n\t// clear the destination element\n\tselectElement.innerHTML = ''\n\n\t// create raw results\n\trawData = diceRollResultsList(inputArray[0], inputArray[1])\n\n\t// create probabilty data\n\tprobabilityData = createDiceRollProbability(rawData)\n\n\t// draw table\n\tprintProbabilityTable(probabilityData, selectElement, graphBarWidth, rollString)\n\n}\n\nfunction destinationCheck(destinationElement) {\n\n\tlet inputString = \"\"\n\n\tif(typeof destinationElement === \"string\") {\n\n\t\tinputString = destinationElement.trim()\n\t\treturn document.querySelector(inputString)\n\n\t}\n\telse if(destinationElement instanceof HTMLElement) {\n\t\treturn destinationElement\n\n\t}\n\telse {\n\t\treturn false\n\t}\n}\n\n// ----------------------------------------------\n\t/* diceRollOutput\n\n\tValidate input from html input element. If input is valid calculate dice roll probability \n\tinformation, using the following funcitons.\n\tdiceRollResultsList and createDiceRollProbability. Lastly present the results in a \n\thtml table using the printProbabilityTable function.\n\n\tReturns false : [False value is returned if\n    validateInput function returns false] \n\t\t\n\t*/\nfunction diceRollOutput() {\n\n\tlet numberOfDice = 0\n\tlet diceSides = 0\n\tlet rollLetter = ''\n\tlet rawData = []\n\tlet resultData = []\n\tlet diceParameters = acquireInput()\n\n\tif (diceParameters) {\n\t\t\n\t\tnumberOfDice = diceParameters[0]\n\t\trollLetter = diceParameters[1]\n\t\tdiceSides = diceParameters[2]\n\n\t\t//Create an array containing all possible dice roll outcomes\n\t\trawData = diceRollResultsList(numberOfDice, diceSides)\n\n\t\t//Work out the probability of each dice roll from rawData\n\t\tresultData = createDiceRollProbability(rawData)\n\n\t\t//Create an table displaying results\n\t\tprintProbabilityTable(resultData)\n\n\n\t\t// make this work:\n\t\t// printProbabilityTable(resultData, '#results')\n\n\n\n\t\tlet table = document.querySelector(\"table\")\n\t\tconsole.log(table)\n\t\tlet tr = document.createElement('tr')\n\t\tconsole.log(tr)\n\t\tlet th = document.createElement('th')\n\t\tth.colSpan = 4\n\t\tconsole.log(th)\n\t\tth.innerHTML = numberOfDice + rollLetter + diceSides\n\t\tconsole.log(th)\n\t\ttr.appendChild(th)\n\n\t\t// table.appendChild(tr)\n\t\ttable.insertAdjacentElement('afterbegin', tr)\n\n\t} else {\n\t\talert(\"I couldn't understand that roll.\")\n\t\treturn false\n\t}\t\n}\n\n// ----------------------------------------------\n\t/* acquireInput\n\t\n\tRegex testing for three character string. For example 2d2. \n\t^([1-5] : First value must be a single digit between 1-5. ^ corret symbol means that this \n\tcharacter gas to be the first character. Value represents number of dice. \n\t(d) : Second character is a single digit with the value of 'd'\n\t([1-9][0-9]?)$ : Third character is either a single digital character or two. The $ symbol \n\tmeans that the second character is optional. The $ symbol means that these characters have\n\tto be last characters in the string. Value represents number of sides of a dice. \n\n\tReturns an array: [num-of-dice-digit, \"d\", num-of-sides-digits]\n\t\n\tOR\n\t\n\tReturns false : [If RegEx failed] \n\n\t*/\nfunction acquireInput() {\n\t\n\tlet userInput = \"\"\n\n\t//get text entered into input element\n\tuserInput = document.getElementById(\"diceInput\").value.trim()\n\t\n\t//Tests RegEx if successful save to inputTestResults, otherwise exist and print invalid to console\n\tconst diceMatcher = RegExp(/^([1-5])(d)([1-9][0-9]?)$/i)\n\n\tlet inputMatches = diceMatcher.exec(userInput)\n\n\tif (inputMatches) {\n\t\t// then the input DID match the regexp\n\t\treturn [inputMatches[1], inputMatches[2], inputMatches[3]]\n\t} else {\n\t\treturn false\n\t}\n}\n\n// ----------------------------------------------\n\nmodule.exports = {\n\tgraph: graphRoll,\n\tpossibleRolls: diceRollResultsList,\n\tcompactResults: createDiceRollProbability,\n\tparseRollString: parseInput\n}\n\n// ===================== js =====================\n\n//# sourceURL=webpack:///./node_modules/rollypolly/index.js?");

/***/ })

/******/ });