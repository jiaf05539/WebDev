let maximum = parseInt(prompt("Please enter the maximum number"));
const number = Math.ceil(Math.random() * maximum);
// console.log(number);
let guess = parseInt(prompt("Guess the number"));
let attempt = 1;
while(guess !== number){
	attempt ++;
	if(guess<number){
		guess = parseInt(prompt("Too low, enter a new number"))
	}else if(guess>number){
		guess = parseInt(prompt("Too high, enter a new number"))
	}else{
		guess = parseInt(prompt("I don't understand"))
	}
}
console.log(`Correct！you tried ${attempt} times!`)