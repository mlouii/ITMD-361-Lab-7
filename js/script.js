function init() {
  var alertButton = document.getElementById('entrybutton');
  var textInput = document.getElementById('entryinput');
  var outputText = document.getElementById('textoutput');

  alertButton.addEventListener('click', function() {
    var message = textInput.value;
    var name = 'Mark Lou';
    var alertMessage = name + ': ' + message;
    
    alert(alertMessage);
    outputText.textContent = message;
  });
}

window.addEventListener('load', init);