Chapter 6 The Secret Life of Objects – Notes

Objects as interfaces – provide a means by which to ‘interface with’ / utilize internal complexities
Ie methods – allow interfacing with some data in some abstract / meaningful way
Methods are properties with their functions as values
‘this’ – represents the object utilizing the method when called within the method functions body
.call() method is like .apply() but for values not arrays
Prototypes
Are a default set of Object properties(methods)
When an Object method is called but doesn’t exist the prototype hierarchy is searched until the top – ‘Object.prototype’
Other value types have their own prototype – Function.prototype, Array.prototype
Object.create(prototypeName) – is used to create an Object with a specific prototype passed
Constructors – creating an Object from a shared prototype using ‘new’ and ‘Function.prototype.method’ to define shared prototype properties.
ie – var cartoonRabbit = new Rabbit()
Rabbit.prototype.speak = function(){…
cartoonRabbit.speak()
Changing the value of an Object property does not change the prototype property value
Native prototype properties are non-enumerable – won’t show up in a loop, can’t be iterated over
Manually created prototype properties are enumerable
Can define a non-enumerable with Object.defineProperty()
Object.hasOwnProperty() tells us if the property is in the Object itself or in its prototype
Polymorphism – Object ‘interface’ usable with different value types.  ie toString()
One reason this works is Objects define their own version of the polymorphic method
Getters and Setters – ‘get’ and ‘set’ values in properties of an object which are methods to interface with the Object
Ie ‘get height() { return this.length; }’ as part of a value chain of an Object property then Object.height to call
Inheritance – important but dodgy OOP technique – calling the old constructor within a new one and passing it the new Object as it’s ‘this’ value
Ie function xA(text) { A.call(this, text); }
‘instanceof’ – binary operator tells us if an Object was derived from a certain constructor
Ie new xA(‘A’) instanceof A = true
[1] instanceof Array = true
This is because xA.prototype derives from A.prototype
Almost every Object is an instanceof ‘Object’
