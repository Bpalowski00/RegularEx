let re;
//////////// Literal Characters
re = /hello/;
re = /hello/i;

//////////// Metacharacter Symbols
re = /^h/i; // ^- Must start with the letter or number
re = /d$/i; // $- Must ends with the letter or number
re = /^hello$/i; // Must Begin and end with 
re = /h.llo/i;//Matches any one character
re = /h*llo/i;//Matches any character 0nor more times
re = /gre?a?y/i; //Optional Character
re = /gre?y\?/i; //Optional Character

// Brackets
re = /gr[ae]y/i; // Must be whatever is inside the bracket
re = /[GF]ray/i;
re = /[^GF]ray/i; // Must not be what is inside the brackets with carrot symbol
re = /[A-Z]ray/;// Must be upper uppercase inside brackets
re = /[a-z]ray/;// Must be lower uppercase inside brackets
re = /[A-Za-z]ray/; // Matches any letter both lower and upper case
re = /[0-9]ray/; // Matches any diget any range EX- [0-2]ray 

/// Braces {} -  Quantifiers
re = /Hel{2}o/i; // Number of characters or numbers in that string - Hello has 2 L

re = /Hel{2,4}o/i; // Number of characters or numbers in that string - 2-4 of that kind in the string
re = /Hel{2,}o/i; // Number of characters or numbers in that string - At least 2 times in a string or more

///// Parentheses - Grouping

re = /([0-9]X){3}/i; // Number of group occurances in string


////// Character Class has to be number,letter,underscore
re = /\w/; /// Any character - returns the first character
re = /\w+/; /// All character - returns the first character
re = /\W/; /// NON character - returns the first character
re = /\d/; // Match any digit





// String to match
//const str = 'Gray';
const str = '1x2x3x';

// Log results
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
	if (re.test(str)) {
		console.log(`${str} matched ${re.source}`)
	} else {
		console.log(`${str} does not ${re.source}`)
	}
}

reTest(re, str);