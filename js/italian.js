
var LinguaFranca = (function (oldLinguaFranca) {
    
    var italianWords = {
            
            "My" : "Mi",
            "name" : "chiamo",
            "is" : "e", 
            "Rod" : "Rod",
            "and" : "con",
            "I" : "io",     
            "like": "piace",
            "to" : "vai",
            "party" : "festaggiare" 

    }; 

        oldLinguaFranca.translateToItalian = function (phrase) { 

            var arrPhrase = phrase.split(" ");
            var strPhrase = "";

            for (var i=0;i < arrPhrase.length; i++){
                if (i == 0) {
                    strPhrase = italianWords[arrPhrase[i]];
            } else {
                    strPhrase += " " + italianWords[arrPhrase[i]];

            }

            }
        
        return strPhrase;  


};

        return oldLinguaFranca; 

}) (LinguaFranca);


 