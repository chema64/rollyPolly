var rollypolly = require('./index')

describe('Reads and returns integer number of dice from roll string', () => {

	test('single digit and double number of dice', () => {
		expect( rollypolly.parseRollString('3d6')[0] ).toBe(3)
		expect( rollypolly.parseRollString('1d6')[0] ).toBe(1)
		expect( rollypolly.parseRollString('6d6')[0] ).toBe(6)
		expect( rollypolly.parseRollString('10d6')[0] ).toBe(10)
		expect( rollypolly.parseRollString('99d6')[0] ).toBe(99)
	})

	test('invalid numbers of dice returns false-ish result', () => {
		expect( rollypolly.parseRollString('100d6')[0] ).toBeFalsy()
		expect( rollypolly.parseRollString('06d6')[0] ).toBeFalsy()
		expect( rollypolly.parseRollString('-1d6')[0] ).toBeFalsy()
		expect( rollypolly.parseRollString('1.3d6')[0] ).toBeFalsy()
		expect( rollypolly.parseRollString('d6')[0] ).toBeFalsy()
	})

	test('single and double digit dice sides', ()=> {
		expect( rollypolly.parseRollString('3d3')[1] ).toBe(3)
		expect( rollypolly.parseRollString('3d1')[1] ).toBe(1)
		expect( rollypolly.parseRollString('3d6')[1] ).toBe(6)
		expect( rollypolly.parseRollString('3d10')[1] ).toBe(10)
		expect( rollypolly.parseRollString('3d99')[1] ).toBe(99)
	})

	test('invalid dice sides returns false-ish result', () => {
		expect( rollypolly.parseRollString('6d06')[1] ).toBeFalsy()
		expect( rollypolly.parseRollString('6d-1')[1] ).toBeFalsy()
		expect( rollypolly.parseRollString('6d1.3')[1] ).toBeFalsy()
		expect( rollypolly.parseRollString('6d')[1] ).toBeFalsy()
	})

	test('single digit and dice sides value of 100', ()=> {
		
		expect( rollypolly.parseRollString('1d100')[1] ).toBe(100)

	})

	test('invalid triple digit dice sides returns false-ish result', ()=> {
		
		expect( rollypolly.parseRollString('1d101')[1] ).toBeFalsy()

	})

	test('single digit and special character "%" should by truthy', ()=> {
		
		expect( rollypolly.parseRollString('1d%')[1] ).toBeTruthy()

	})

	test('single digit and special character "%" should equal number value 100', ()=> {
		
		expect( rollypolly.parseRollString('1d%')[1] ).toBe(100)

	})

})


describe('generates list of all possible results', () => {

	test('return correct results for sensible rolls', () => {
		expect( rollypolly.possibleRolls(1,1) ).toEqual([1])
		expect( rollypolly.possibleRolls(2,1) ).toEqual([2])
		expect( rollypolly.possibleRolls(1,2) ).toEqual([1,2])
		expect( rollypolly.possibleRolls(1,3).sort() ).toEqual([1,2,3])
		expect( rollypolly.possibleRolls(2,3).sort() ).toEqual([2,3,3,4,4,4,5,5,6])
	})

	test('return single result of zero for zero rolls and/or zero sides', () => {
		expect( rollypolly.possibleRolls(0,0) ).toEqual([0])
		expect( rollypolly.possibleRolls(0,1) ).toEqual([0])
		expect( rollypolly.possibleRolls(1,0) ).toEqual([0])
	})

})


describe('generates count of results', () => {

	test('return correct count', () => {
		const testList = [[
			[1,2,3,4,5], [undefined,1,1,1,1,1]
		],[
			[3,4,4,5], [undefined,undefined,undefined,1,2,1]
		],[
			[1,3,1,3], [undefined,2,undefined,2]
		]]

		testList.forEach( (pair)=> {
			expect( rollypolly.compactResults(pair[0]) ).toEqual(pair[1])
		})
	})

})
