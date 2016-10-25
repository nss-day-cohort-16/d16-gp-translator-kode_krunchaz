
var LinguaFranca = (function(oldLinguaFranca){
	
	var germanWords = {
	"My": "mein",
	"my": "mein ",
	"name": "Name ",
	"is": "ist ",
	"Rod": "Rod ",
	"and": "und ",
	"I": "ich ",
	"like": "mache ",
	"to": "gerne ",
	"party": "Party",
	"say": "sag ",
	"hello": "hallo ",
	"to": "zu ",
	"little": "kleinem ",
	"friend": "Freund ",
	"life": "leben ",
	"like": "wie ",
	"a": "ein ",
	"box": "Karton ",
	"of": "von ",
	"chocolates": "Schokoladen ",
	"sounds": "Hoert sich an ",
	"case": "Fall ",
	"the": "den ",
	"mondays": "Montagen "
	}

	oldLinguaFranca.translateToGerman = function(phrase) {
			var phraseToTranslate = phrase.split(" ");
			var translatedPhrase = "";
			for (var i = 0;i < phraseToTranslate.length; i++){
				translatedPhrase += germanWords[phraseToTranslate[i]];
			}
			return translatedPhrase;
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