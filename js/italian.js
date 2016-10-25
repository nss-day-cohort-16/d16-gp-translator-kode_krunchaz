
var LinguaFranca = (function (oldLinguaFranca) {
    
    var italianWords = {
            
            "my" : "mi",
            "name" : "chiamo",
            "is" : "e", 
            "Rod" : "Rod",
            "and" : "e",
            "I" : "mi",     
            "like to party": "piace festaggiare" 

    }; 

        oldLinguaFranca.translateToItalian = function (phrase) { 

            var arrPhrase = phrase.split(" ");
            var strPhrase = "";

            //console.log("phrase:", phrase);
            //console.log("arrPhrase", arrPhrase.length);

            for (var i=0;i < arrPhrase.length; i++){
                //console.log("i", i);
                if (i == 0) {
                    strPhrase = italianWords[arrPhrase[i]];
            } else {
                    strPhrase += " " + italianWords[arrPhrase[i]];

            }

            //console.log("strPhrase", strPhrase);
            }
        
        return strPhrase;  


};

        return LinguaFranca

}) (LinguaFranca);

//console.log(LinguaFranca); 