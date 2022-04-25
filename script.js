// Coding Challenge
// Given a string such as "hello world"
// and a character such as "o" or "h"
// Count the occurrences of this character in the string
// in the most efficient way possible.

const testString = "hello world";
const testChar = "o";
/*const testStringWords= testString.split("")
console.log(testStringWords) */



// expected result with these should be 2 occurences

// DO NOT change the name of this function
// This function should accept a string (a) 
// and a character (b) as a parameter
// and return the number of occurrences
const countOccurencesInString = (a, b) => {
	return a.split(b).length - 1
}
	/*let num = 0;
for(let i = 0; i <a.length; i++) {
	if(a[i] === b) {
		num += 1
	}

return num;
	// return the number of occurrences
}*/



// Don't touch this either
module.exports = countOccurencesInString;
