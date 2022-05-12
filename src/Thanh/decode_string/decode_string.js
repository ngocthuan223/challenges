const decodeString = (s) => {


    let Numberlist = []; //
    let CutNumber = ''; // 
    let StringRepeat = []; // 
    let result = ''; // 

    for (let char of s) {   
         // case 1 là số
        if(!isNaN(char)){
        CutNumber = `${CutNumber}${char}`; // 

        }//case 2 là '['
         else if(char === '[') {
            Numberlist.push(CutNumber);  //
            CutNumber = '';  // ''

            StringRepeat.push(result); // 
            result = ''; // ''

        }//case 3 là ']'
         else if (char === ']'){
            result = StringRepeat.pop() +  result.repeat(Numberlist.pop())

        }//case 4 !3case trên
         else {
            result += char ; // c
        }
    }
    return result;

   }
module.exports = {
    decodeString
}

