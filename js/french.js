var LinguaFranca = (function() {

var frenchTrans = { "My": "Ma", "name" : "prénom", "is" : "est", "Rod": "Rod", "and" : "et",  "I": "je", "like": "comme", "to": "à", "party": "fête"};

	return { 
		translateToFrench: function(phrase) {
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
	}
})();