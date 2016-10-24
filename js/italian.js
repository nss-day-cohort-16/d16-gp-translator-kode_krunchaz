var LinguaFranca = (function (oldLinguaFrance) {
	
	var italianWords = {
			
			"my" : "mi",
			"name" : "chiamo",
			"is" : "e", 
			"Rod" : "Rod",
			"and" : "e",
			"I" 	: "mi", 	
			"like to party": "piace festaggiare" 

	}; 

		oldLinguaFranca.translateToItalian = function (phrase) { 

			return italianWords[phrase]; 
		};

		return LinguaFranca

}) (LinguaFranca) ;


console.log(LinguaFranca); 

//suona come un caso di lunedì
