var textField = document.getElementById('field');
var suggestions = document.getElementById('suggestions');

textField.addEventListener('input', function() {
var matching = terms.filter(function(term) {
	return term.indexOf(textField.value) === 0;  
});
suggestions.textContent = '';
matching.slice(0, 20).forEach(function(term) {
	var suggestionNode = document.createElement('div');
	suggestionNode.textContent = term;
	suggestionNode.addEventListener('click', function() {
	textField.value = term;  
	suggestions.textContent = '';
	});
	suggestions.appendChild(suggestionNode);
});
});
