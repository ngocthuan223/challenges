function decodeString(input){
    const stackLoop = [];
    const stackChars = [];
    let finalString = '';

    let strTemp = '';
    for(let index = 0; index < input.length; index++){
        const item = input[index];
        if(item.match(/\d/)){
            if (strTemp !== ''){
                stackChars.push(strTemp);
                strTemp = '';
                stackLoop.push('0');
            }
            stackLoop.push(item);
        }else if (item === ']' || item === '['){
            if(strTemp !== ''){
                stackChars.push(strTemp);
                strTemp = '';
            }
        }
        else {
            strTemp += item;
        }
    }
    if(strTemp !== ''){
        stackLoop.push('0');
        stackChars.push(strTemp);
    }

    for(let index = stackLoop.length - 1 ;index >= 0; index--){
        const loop = stackLoop[index];
        const chars = stackChars.pop();
        if(chars){
            const temp = loop !== '0' ? chars.repeat(loop) : chars;
            finalString = temp + finalString;
        }else{
            finalString = finalString.repeat(loop);
        }
    }
    return finalString;
}



module.exports = {
    decodeString
}