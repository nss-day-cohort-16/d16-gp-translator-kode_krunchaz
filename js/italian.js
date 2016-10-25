
var LinguaFranca = (function (oldLinguaFranca) {
    
    var italianWords = {
            
            "my" : "Mi",
            "name" : "chiamo",
            "is" : "e", 
            "Rod" : "Rod",
            "and" : "con",
            "I" : "io",     
            "like": "piace",
            "to" : "vai",
            "party" : "festagiare", 
            "sounds": "souna",            
            "a": "a",
            "case": "caso",
            "of": "de",
            "the" : "la",
            "mondays" : "lunedi", 
            "life": "vivo",
            "box" : "scatola",
            "chocolates": "ciccolata", 
            "say" :  "dire",
            "hello" : "ciao",
            "little" : "piccolo",
            "friend" : "amico"

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


 