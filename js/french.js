var LinguaFranca = (function(oldLinguaFranca) {

var frenchTrans = { "my": "Ma", "name" : "prénom", "is" : "est", "Rod": "Rod", "and" : "et",  "I": "je", "like": "comme", "to": "à", "party": "fête",
										"Say": "Dire", "hello": "bonjour", "my": "ma", "little": "peu", "friend": "ami",
										"Life": "Life", "a": "un", "box": "fort", "of": "de", "chocolates": "chocolats",
										"Sounds": "Sons", "case": "cas", "the": "l'", "Mondays": "Du lundi"
									};

		oldLinguaFranca.translateToFrench = function(phrase) {
			var arrPhrase = phrase.split(" ");
			var strPhrase = "";

			for (var i=0;i < arrPhrase.length; i++){
				if (i == 0) {
					strPhrase = frenchTrans[arrPhrase[i]];
			} else {
					strPhrase += " " + frenchTrans[arrPhrase[i]];

			}

			}
		
			strPhrase += ".";
		return strPhrase;
		}

	return oldLinguaFranca;
})(LinguaFranca); 	