var LinguaFranca = (function() {

	return { 
		translateTo: function(language, phrase) {

			return LinguaFranca[language](phrase);

		}
	}
})();