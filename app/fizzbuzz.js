
this.answer = function(number){
	var returnText = ""
	
	if(number % 3 == 0){
		returnText += "Fizz"
	}
	if(number % 5 == 0){
		returnText += "Buzz"
	}
	else{
		return number;
	}
	return returnText
}