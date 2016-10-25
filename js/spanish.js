var LinguaFranca = (function(oldLinguaFranca){

var spanishTrans = { "My": "Mi", "name" : "nombre", "is" : "es", "Rod": "Rod", "and" : "y",  "I": "yo", "like": "gusta", "to": "to", "party": "feista"};
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

