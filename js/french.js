var LinguaFranca = (function() {

var frenchTrans = { "My": "Ma", "name" : "prénom", "is" : "est", "Rod": "Rod", "and" : "et",  "I": "je", "like": "comme", "to": "à", "party": "fête"};

	return { 
		translateToFrench: function(phrase) {
			var arrPhrase = phrase.split(" ");
			var strPhrase = "";

			console.log("phrase:", phrase);
			console.log("arrPhrase", arrPhrase.length);

			for (var i=0;i < arrPhrase.length; i++){
				console.log("i", i);
				if (i == 0) {
					strPhrase = frenchTrans[arrPhrase[i]];
			} else {
					strPhrase += " " + frenchTrans[arrPhrase[i]];

			}

			console.log("strPhrase", strPhrase);
			}
		
		return strPhrase;
		}
	}
})();