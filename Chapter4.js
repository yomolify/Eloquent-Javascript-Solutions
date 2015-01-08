// Returns range of numbers between start and end with a step
function range(start, end, step) {
	// Default step 1 or -1 depending on start and end;
	if (start < end && step == undefined)
		step = 1;
	else 
		step = -1;
	// Two loops each for positive and negative steps
	var returnArray = [];
	var length = Math.abs(end - start);
	if (start < end) {
		for (var i = 0; i <= length; i++) {
			if (start <= end) {
				returnArray.push(start);
				start += step
			}
		}
	}
	else {
		for (var i = 0; i <= length; i++) {
			if (start >= end) {
				returnArray.push(start);
				start += step;
			}
		}
	}
	return returnArray;
}

// Return sum of numbers in array
function sum(array) {
	var result = 0;
	for (var i = 0; i < array.length; i++) {
		result += array[i];
	}
	return result;
}

// Returns a new array reversed of original array
function reverseArray (array) {
	var returnArray = [];
	for (var i = 0; i < array.length; i++) {
		returnArray.unshift(array[i]);
	}
	return returnArray;
}

// Returns the same array, reversed
function reverseArrayInPlace (array) {
	for (var i = 0; i < (array.length)/2; i++) {
		var temp = array[i];
		array[i] = array[array.length - i - 1];
		array[array.length - i - 1] = temp;
		}
	return array;
}

// Convert passed in array to list and return this list
function arrayToList (array) {
	var list = null;
	for (var i = array.length - 1; i >= 0; i--) {
		list = prepend(array[i], list);
	}
	return list;
}

// Prepend: takes an element and a list and creates a new list 
// that adds the element to the front of the input list
function prepend(value, list) {
  return {value: value, rest: list};
}

// Convert passed in list to array and return it
function listToArray(list) {
	var returnArray = [];
	// Love this for loop
	for (var node = list; node; node = node.rest) {
		returnArray.push(node.value);
	}
	return returnArray;
}

// Takes a list and a position (number), and returns the element
// at the given position in the list or undefined
function nth(list, position) {
	var index = 0;
	if (position === index) {
		return list.value;
	}
	else if (list === null) {
		return undefined;
	}
	else
		return nth(list.rest, position - 1);
}

// Deep Equal: takes two values and returns true only if they are 
// the same value or are objects with the same properties/values
function deepEqual(a, b) {
	if (a === b) return true;

	if (typeof(a) !== "object" || a === null ||
		typeof(b) !== "object" || b === null)
		return false;

	var propsInA = 0, propsInB = 0;

	for (var prop in a)
		propsInA++;

	for (var prop in b) {
		propsInB++;
		if ((!prop in a) || !deepEqual(a[prop], b[prop]))
			return false;
	}
	return propsInA === propsInB;
}