const decodeString = (s) => {
    const stack = [];
    for (const char of s) {
        if (char !== "]") {
            stack.push(char);
            continue;
        }

        let currChar = stack.pop();
        let decoded = '';
        while (currChar !== '[') {
            decoded = currChar.concat(decoded);
            currChar = stack.pop();
        }

        let num = '';
        currChar = stack.pop();

        while (!Number.isNaN(Number(currChar))) {
            num = currChar.concat(num);
            currChar = stack.pop();
        }

        stack.push(currChar);
        stack.push(decoded.repeat(Number(num)));
    }

    return stack.join('');
};
module.exports = {
    decodeString
}