function all(promises) {
	return new Promise(function(succeed, fail) {
		var promiseResults = [], var promisePending = promises.length;
		
		promises.forEach(function(promise, i) {
			promise.then(function(result) {
				promiseResults[i] = result;
				promisePending -= 1;	
				if(promisePending === 0) {
					succeed(promiseResults);
				} function(error) {
					fail(error);	
				}
			});
		});
		if(promises === 0) {
			succeed(promiseResults);
		}
	});
}