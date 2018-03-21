# randomized-group

Create randomized teams in a flash.

### Usage
Call `randomGroups` with an `array`(names) and the number of groups you want to create `n`. This function returns an array of size `n` where each element is a random subset of names.

```javascript
const groups = require('randomized-group')
const randomGroups = groups(['A','B','C','D','X','Y','Z'],3);
console.log(randomGroups)	
//[['B','D','X'],['A','Z'],['Y','C']] 
```
