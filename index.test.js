var rollypolly = require('./index')


describe('A string is input which provides number of dice and dice sides', () => {
	test('number value which represents, number of dice', () => {
		expect( rollypolly.parseRollString('3d6')[0] ).toBe(3)
	})

	// test('number value which represents, number of sides', () => {
	// 	expect( rollypolly.parseRollString('3d6')[1] ).toBe(6)
		
	// })
})

// test.only('Parses single digit roll count', () => {
// 	let parsedInfo = rollypolly.parseRollString('3d6')
// 	expect(parsedInfo[0]).toBe(3)

// 	// parsedInfo = rollypolly.parseRollString('1d6')
// 	// expect(parsedInfo[0]).toBe(1)

// 	// expect(  rollypolly.parseRollString('0d6')  ).toBeFalsy()



// })

// test('Parses single digit dice sides', function() {
// 	let parsedInfo = rollypolly.parseRollString('3d6')
// 	expect(parsedInfo[1]).toBe(6)	

// 	// parsedInfo = rollypolly.parseRollString('3d6')
// 	// expect(parsedInfo[1]).toBe(6)

// 	// parsedInfo = rollypolly.parseRollString('3d1')
// 	// expect(parsedInfo[1]).toBe(1)
// })


