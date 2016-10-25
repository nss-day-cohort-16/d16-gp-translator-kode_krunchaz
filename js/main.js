var output = document.getElementById("output");
var input = document.getElementById("input");

var language = document.getElementById("select");

document.getElementById("submit").addEventListener("click", translate);

function translate () {

		var functionToCall = "translateTo" + language.value;
		
		output.innerHTML = LinguaFranca.translateTo(functionToCall, input.value);
	}