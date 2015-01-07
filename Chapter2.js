// Eloquent Javascript - Sample Solutions

// Chapter 2


// Looping a Triangle:

var string = "";
for (var i = 1; i <= 7; i++) {
		string += "#";
		console.log(string);
	}



// FizzBuzz

for (var i = 1; i <=100; i++) {
	// Check for Fizz
	if (i%3 === 0) {
		if (i%5 !== 0) {
		console.log("Fizz");
		continue;
		}
	}
	// Check for Buzz
	else if (i%5 === 0) {
		if (i%3 !== 0) {
			console.log("Buzz");
			continue;
		}
	}
	// Check for FizzBuzz
	if (i%5 === 0 && i%3 === 0) {
		console.log("FizzBuzz");
		continue;
	}
	else {
		console.log(i);
	}
}

// Chess Board Generatorches
// Generates chess board of given size 

function chessBoardGenerator (size) {
	var string = "\n";

	// First for loop --> columns
	// Second for loop --> rows
	for (var col = 0; col < size; col++) {
		if (col%2 === 0) {
			for (var row = 0; row < size/2; row++) {
				string += " #";
			}
			string += "\n";
		}
		else {
			for (var row = 0; row < size/2; row++) {
				string += "# ";
			}
			string += "\n";
		}
	}
	return string;
}


