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
re = /gre?a?y\?/i; //Optional Character



// String to match
const str = 'Greay';
//const str = 'Hello World';

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