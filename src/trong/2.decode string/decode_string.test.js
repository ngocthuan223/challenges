const chai = require("chai");
const assert = chai.assert;
const { decodeString } = require('./decode_string');

describe("String", () => {
    it("Should decode string", async () => {
        const items = [
            {
                input: '3[a]2[bc]',
                result: 'aaabcbc'
            },
            {
                input: '3[a2[c]]',
                result: 'accaccacc'
            },
            {
                input: '2[abc]3[cd]ef',
                result: 'abcabccdcdcdef'
            }
        ]
        items.forEach(item => {
            assert.equal(decodeString(item.input), item.result);
        });
    });
});
