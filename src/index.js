module.exports = function check(str, bracketsConfig) {
    strArray = str.split("");
    let needToBeClosed = [];
    let prevBracket = strArray[0];
    if(str=='|(|)'){
        console.log('yea');
    }
    //For every bracket
    for(i = 0; i < strArray.length; i++){
        currentBracket = strArray[i];
        //Every type of brackets
        for(j = 0; j < bracketsConfig.length; j++){
            bracketsType = bracketsConfig[j];
            openBracket = bracketsType[0];
            closingBracket = bracketsType[1];
            // In case open and closing brackets are the same
            if((openBracket == closingBracket) && (currentBracket == openBracket)){
                if(!needToBeClosed.includes(currentBracket) || (needToBeClosed[needToBeClosed.length-1] != currentBracket))
                    needToBeClosed.push(currentBracket);
                else if(needToBeClosed[needToBeClosed.length-1] == currentBracket){
                        needToBeClosed.pop();
                    } else {
                        return false;
                    }
                
                
            } else {

                // For every Open Brackets
                if(currentBracket == openBracket){
                    needToBeClosed.push(currentBracket);
                } else
                // For every Closing Brackets
                if(currentBracket == closingBracket){
                    if(needToBeClosed.length==0)
                    return false;
                    if(openBracket == needToBeClosed[needToBeClosed.length-1]) {
                        needToBeClosed.pop();
                    }
                }   
            }
        }
        prevBracket = currentBracket;
    }
    if(needToBeClosed.length==0){
       return true;
    } else {
        return false;
    }
};
