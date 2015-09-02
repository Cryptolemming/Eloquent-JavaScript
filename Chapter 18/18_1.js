  var code = document.getElementById('code').value;
  var run = document.getElementById('button');
  var output = document.getElementById('output');
  
  run.addEventListener('click', function() {
    try {
      var result = new Function(code)();
      output.innerText = String(result);
    } catch(e) {
      output.innerText = 'Error: ' + e;
    }
  });