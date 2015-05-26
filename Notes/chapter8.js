Chapter 8: Bugs and Error Handling - Notes

- 'use strict' can be included at top of function or body to report an error from that code
- break points are set so execution stops at problem lines for direct access to errors
- exceptions are errors thrown as a defined value when something goes wrong
	- unwinding the stack: exception travels down function call stack to first caller
	- point is to catch the exception on its way down and do something with it so program otherwise keeps running
	- exception is thrown with 'throw new Error()' or similar ie 'throw e';
	- it is caught with a try block wrapping the code and a catch(e) block which binds the exception to the throw value initially defined
- clean-up after an exception is raised aims to restore values which otherwise did not return because an exception was raised first
- finally blocks can be included to try blocks in order to return said values as needed
	- these blocks return regardless what transpires as per the try block
- if an exception makes its way through the stack without being caught it is handled by the environment
- all we know when a catch block is entered is an exception was raised, we do not know which or what
	- this is because the catch block does not differentiate between or pinpoint the nature of the exception
	- it is not good practice to create catch all type exception handles
- be specific - create a catch block to determine something specific
	- one way is use instanceof to determine if e instanceof whatever the throw value or custom Error is
	- do not forget can create Error prototypes ie CustomError.prototype = Object.create(Error.prototype) this way e instanceof Error will return true as well
- assertions are exceptions thrown on the fly to ensure mistakes cause failures before nonsensical values are executed or returned through the stack
