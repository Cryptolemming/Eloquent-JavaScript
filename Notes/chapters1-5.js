Chapter 1 Values Types & Operators – Notes

6 types of bit representations – string, number, Boolean, objects, functions, undefined values
A number = 64 bits
Operators such as ‘–‘ and ‘+’ take up memory as well
Fractions are approximations and not exact
Operators defined by number of values they are used with
Unary operator = works on one value ie ‘typeof’
Binary operator = works on two values ie ‘2 + 3’
Ternary/conditional operator = condition and two results ie condition ? iftrue : iffalse
Unicode standard – comparison order standard
Logical operators before mathematical
Upper case letters lower then lower case letters ie ‘A < B’ is true, ‘a < A’  is true
Type conversion – auto type conversions occur with ‘==’, use ‘===’ to be safe if unsure
0, NaN and empty string ‘’ == false, all other values == true
Short circuiting logical operators – if left || value is true then right value is skipped and left returned otherwise right is checked
Defining a default value with ‘null || value’ will return the value on right if left is null (false)
&& operator is the opposite – if left is false it is returned and right is ignored

Chapter 2 Program Structure – Notes

Keywords are reserved words native to the language
Expression = anything that returns a value
isNaN() returns true if argument is NaN
‘do’ loop executes its body once before checking condition for whether it should continue
‘break’ – exits a loop
‘continue’ – exists body of loop but goes back for another iteration
Switch statements similar to Ruby


Chapter 3 Functions – Notes

Scope – range of functionality for a variable – its ‘callability’ range
Can access global variables from within a function as long as there isn’t an internal one defined with the same name
Lexical scoping – variable scope limited to that of its containing function and any nested within
‘let’ allows unique variables of same name outside and inside a block
Declaration – function xyz();
Automatically moved to the top of their scope
Which means they can be placed anywhere and still act as parent functions in the scope
Don’t define through declaration inside a loops – try to use only in outermost block of function/program
Call stack – flow control of the context of function calls
Functions have native parameter inclusion lengths – if not included then included as undefined, if too many are included the overflow are ignored
Closure – parameter used as local variable within nested function ie function(par)(var)
Recursion slower than loops but cleaner
Memory usage and efficiency largely irrelevant unless complex programs and datasets
Function side effects – anything other than return statements, ie print statements
pure function is one without side effects nor reliance on side effects from other functions ie it only returns something

Chapter 4 Data Structures: Objects and Arrays – Notes

Unlike other values – an Object’s properties are mutable (can be changed)
An Object != another Object with the same name because they do not hold values – they instead grasp values when called.
An Object’s identity is its equality
Identity’s are unequal unless an Object is referring to the exact same such physical properties
Phi-coefficient  - Boolean correlation measure
List = nested set of objects
Null is an object in JavaScript

Chapter 5 Higher-Order Functions – Notes

Abstraction – making code more efficient by leaving out unnecessary steps which can fall within and be represented by a more encompassing code
Higher-order functions – utilize or return other functions
JSON – JavaScript Object Notation – Objects representing web data
Properties are in quotes
Only simple data expressions allowed
JSON.stringify() – converts a JS value to a JSON string
JSON.parse() – from JSON value to JS value
.forEach() - runs through an Objects properties 
.filter() – builds up a new Object of properties that meet some conditions
.map() – transforms an array by performing some function on each element and creates a new array with them
.reduce() – folds array values into one based on some conditions