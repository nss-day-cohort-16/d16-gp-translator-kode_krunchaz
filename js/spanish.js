var LinguaFranca = (function(oldLinguaFranca){
	var spanishTrans = {
		"My": "Mi",
		"Name": "nombre",
		"Is": "es",
		"Rod": "Rod",
		"and": "y",
		"I": "yo",
		"like": "gusta",
		"to":"to",
		"party": "feista"
	}
	
	oldLinguaFranca.translateToSpanish = function(input){
		return spanishTrans[input];
	}

return oldLinguaFranca;
	
	

})(LinguaFranca);