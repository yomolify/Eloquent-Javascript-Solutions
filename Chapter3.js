// Return minimum of two numbers
// Returns same number if they are equal
function min(arg1, arg2) {
	if (arg1 < arg2) 
		return arg1;
	else 
		return arg2;
}

// Recursive isEven
function isEven(num) {
	if (num === 0) 
		return true;
	else if (num === 1) 
		return false;
	else 
		return isEven (Math.abs(num - 2));
}


// Return number of times a given character appears in a given string
function countChar(string, char) {
	var count = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === char) {
			count++;
		}
	}
	return count;
}
