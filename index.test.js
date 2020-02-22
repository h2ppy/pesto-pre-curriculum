const {
    describe,
    expect,
    it,
    matchers
  } = require("./test-frame-work")

const {
    add,
    subtract,
    multiply,
    divide
  } = require("./index")

  describe('testing add', () => {
    it('add the the numbers provided as args', () => {
      const actual = add(1,2)
  
      expect(actual).toBe(3)
    }) 
  })

  describe('testing subtract', () => {
    it('subtracts second argument from first argument,resulting in negative number', () => {
      const actual = subtract(1,2)
  
      expect(actual).toBe(-1)
    }) 
  })

  describe('testing subtract', () => {
    it('subtracts second argument from first argument,resulting in positive number', () => {
      const actual = subtract(2,1)
  
      expect(actual).toBe(1)
    }) 
  })

  describe('testing multiply', () => {
    it('multiplies second argument into first argument', () => {
      const actual = multiply(2,1)
  
      expect(actual).toBe(2)
    }) 
  })

  describe('testing divide', () => {
    it('divides first argument by second argument', () => {
      const actual = divide(2,2)
  
      expect(actual).toBe(1)
    }) 
  })

  describe('testing divide', () => {
    it('divides first argument by second argument,when second arg is 0', () => {
      const actual = divide(2,0)
  
      expect(actual).toBe(Infinity)
    }) 
  })

