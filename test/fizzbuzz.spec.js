describe('FizzBuzz',function(){
	it('should return string 1 when get number 1',function(){
		expect(answer(1)).toEqual(1)
	});
	it('should return string 2 when get number 2',function(){
		expect(answer(2)).toEqual(2)
	});
	it('should return string "Fizz" when get number 3',function(){
		expect(answer(3)).toEqual("Fizz")
	});
	it('should return string "Buzz" when get number 5',function(){
		expect(answer(5)).toEqual("Buzz")
	});
	it('should return string "Fizz" when get number 6',function(){
		expect(answer(6)).toEqual("Fizz")
	});
	it('should return string "FizzBuzz" when get number 15',function(){
		expect(answer(15)).toEqual("FizzBuzz")
	});

});