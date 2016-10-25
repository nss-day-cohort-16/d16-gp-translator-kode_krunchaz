var LinguaFranca = (function(oldLinguaFranca){

var spanishTrans = { 
	"my": "Mi", 
	"name" : "nombre", 
	"is" : "es", 
	"Rod": "Rod", 
	"and" : "y",  
	"I": "yo", 
	"like": "gusta", 
	"to": "to",
	"party": "feista",
	"say": "decir",
	"hello": "hola",
	"to": "a",
	"little": "picato",
	"friend": "hombre",
	"life": "vida",
	"like": "idéntico",
	"a": "la",
	"box": "carton",
	"of": "y",
	"chocolates": "chocolate",
	"sounds": "sonidos",
	"case": "caso ",
	"the": "y ",
	"mondays": "lunes "

};
		oldLinguaFranca.translateToSpanish = function(phrase) {

			var arrPhrase = phrase.split(" ");

			var strPhrase = "";
			
			for (var i=0;i < arrPhrase.length; i++){

				if (i == 0) {

					strPhrase = spanishTrans[arrPhrase[i]];
					
			} else {
					strPhrase += " " + spanishTrans[arrPhrase[i]];

			}

		}
		return strPhrase;

	}
	return oldLinguaFranca;

})(LinguaFranca);

