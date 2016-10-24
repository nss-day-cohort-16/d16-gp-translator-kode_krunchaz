
var LinguaFranca = (function(oldLinguaFranca){
	
	var germTrans = {
		"my": "mein",
		"name": "Name",
		"is": "ist",
		"Rod": "Rod",
		"and": "und",
		"I": "ich",
		"like to party": "mache gerne Party"
	};

	oldLinguaFranca.translateToGerman = function (word) {
		return words[word];
	};

	return LinguaFranca

})(LinguaFranca);