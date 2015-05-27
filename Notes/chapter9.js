Chapter 9: Regular Expressions - Notes

- regular expression is a type of object
- create as constructor with RegExp or as literal enclosed with / /
- .test() will return boolean for whether expression matches a string
- .exec() can return the match and the index where the match starts
- if subexpressions are included, .exec() will return array with full match followed by sub-matches and an unmatched group returns as undefined
- .replace(x, y) will replace x with y, include /g to replace all x
- +, -, ? and {} are greedy, they match all before back-tracking to match others
- follow those with a ? so it proceeds in turn
- .search() takes expression and returns first index of match or -1 if not found
- regular expression objects have properties
	- source refers to the string the expression was created from
	- lastIndex controls where the next match will start