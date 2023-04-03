function init() {
  var alertButton = document.getElementById('entrybutton');
  var textInput = document.getElementById('entryinput');
  var outputText = document.getElementById('textoutput');

  function showMeText(){
    var message = textInput.value;
    outputText.innerHTML = message;
    alert('Mark Lou'+ ': ' + message);
  }

  alertButton.addEventListener('click', showMeText);
}

window.addEventListener('load', init);