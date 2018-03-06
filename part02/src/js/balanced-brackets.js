var balancedBrackets = (function(){
    'use strict';

    var bracketPairs = [['{','}'],['(',')'],['[',']']];

    function isBalanced(inputString){
        
        //empty string is balanced
        if (inputString === "" ){
            printOutput(true);
            return true;
        }

        //not empty string
        var inputArray = inputString.split('');
        var openingBracketStack = [];

        for (var i = 0; i < inputArray.length; i++){
            var currentCharacter = inputArray[i];

            if(isBracket(currentCharacter)){
                if(isOpeningBracket(currentCharacter)){
                    openingBracketStack.push(currentCharacter);
                } else { 
                    //is closing bracket
                    if(openingBracketStack.length === 0){
                        printOutput(false);
                        return false;
                    } else{
                        var topCharacterFromStack = openingBracketStack.pop();
                        if(!isMatch(topCharacterFromStack,currentCharacter)){
                            printOutput(false); 
                            return false;
                        }
                    }
                }
            }
        }
        printOutput(true);
        return true;
    }

    function isMatch(top,char){
        // matching the to character
        for(var i = 0; i < bracketPairs.length; i++){
            if (bracketPairs[i][0] === top && bracketPairs[i][1] === char) {
                printOutput(true);
                return true;
              }
        }
        return false;
    }

    function printOutput(hasBalanced){
        var toPrint = (hasBalanced === true)? "Balanced": "Not Balanced";
    }

    function isBracket(char) {
        return ("{}[]()".indexOf(char) > -1) ? true : false;
    }

    function isOpeningBracket(char){
        for (var i = 0; i < bracketPairs.length; i++) {
            if (bracketPairs[i][0] === char) {
              return true;
            }
          }
          return false; 
    }

    return {
        isBracket: isBracket,
        isOpeningBracket: isOpeningBracket,
        printOutput: printOutput,
        isBalanced:isBalanced
    }
})();

