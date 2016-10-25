
var LinguaFranca = (function(oldLinguaFranca){
	
	var germanWords = {
	"my": "mein ",
	"name": "Name ",
	"is": "ist ",
	"Rod": "Rod ",
	"and": "und ",
	"I": "ich ",
	"like": "mache ",
	"to": "gerne ",
	"party": "Party",
	"Say": "sag ",
	"hello": "hallo ",
	"to": "zu ",
	"little": "kleinem ",
	"friend": "Freund ",
	"Life": "leben ",
	"like": "wie ",
	"a": "ein ",
	"box": "Karton ",
	"of": "von ",
	"chocolates": "Schokoladen ",
	"Sounds": "Hoert sich an ",
	"case": "Fall ",
	"the": "den ",
	"Mondays": "Montagen "
	}

	oldLinguaFranca.translateToGerman = function(phrase) {
			var phraseToTranslate = phrase.split(" ");
			var translatedPhrase = "";
			for (var i = 0;i < phraseToTranslate.length; i++){
				translatedPhrase += germanWords[phraseToTranslate[i]];
			}
			return translatedPhrase;
			// console.log(translatedPhrase);
		};
		return oldLinguaFranca;
		
	})(LinguaFranca);












// function (word) {
// 		var newPhrase = word.split("");
// 		var phraseAsString ="";
// 		for (var i = 0; i < newPhrase.length; i++){
// 			console.log(i);
// 		}
// 		return germTrans[word];
// 	};

// 	return LinguaFranca

// })(LinguaFranca);