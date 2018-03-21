randomized-group is a basic npm module which takes two arguments, first one is an array(names) and second one is a number(n). This function returns an array of size n where each element is a random subset of names.

const groups = require('randomized-group')

var randomGroups = groups(['A','B','C','D','X','Y','Z'],3);

console.log(randomGroups)	//[['B','D','X'],['A','Z'],['Y','C']] . As this is randomized, the output may vary
