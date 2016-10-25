var output = document.getElementById("output");
var input = document.getElementById("input");

var language = document.getElementById("select");

document.getElementById("submit").addEventListener("click", translate);

function translate () {
	// if (language.value === Italian) {
		var functionToCall = "translateTo" + language.value;
		// console.log(LinguaFranca);
		// console.log(functionToCall);

		var translated = LinguaFranca[functionToCall](input.value);
		output.innerHTML = translated;
	}



// console.log(output);