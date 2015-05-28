Chapter 10: Modules - Notes

- Namespacing - defining public vs private scope for the programs interfaces
- modules - organize code and scope based on common purpose and general program interface requirements either internally or by segregation to external files
- objects are global, functions are the only things that have their own scope
- better to localize variables which are not needed as part of the global scope
- thus can wrap all a modules code within a function to localize the scope of its parts
- wrapping function declaration in () will have it treated as an expression and so can be immediatelly called (function(){})();
- 2 popular module systems in JS
	- CommonJS Modules - uses a require function to get a module by name and returns its interface
	- AMD (asynchronous module definition) - uses a define function which takes 2 arguments - first is an array of module names and second is a function
		- it loads the modules in the background then runs the function with their interfaces as arguments

- interface development tips
	- predictable - make its purpose clear to others
	- composable - easily interfaced with other code ie Array-style collections of objects < actual arrays which can take .map() etc
	- layered interfaces - low-level = more functionality/complex, high-level = simpler

