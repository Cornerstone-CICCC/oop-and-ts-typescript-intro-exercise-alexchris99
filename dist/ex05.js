"use strict";
// 5. Create a function named `countVowels` that takes a string as a parameter.
//    The function should return the number of vowels (a, e, i, o, u) in the string.
//    Use TypeScript types to ensure the parameter and return type are properly typed.
function countVowels(word) {
    const wordArray = word.toLowerCase().split("");
    const vowelsObj = {
        a: "a",
        e: "e",
        i: "i",
        o: "o",
        u: "u"
    };
    let vowels = 0;
    wordArray.forEach(letter => {
        if (letter in vowelsObj) {
            vowels += 1;
        }
    });
    return vowels;
}
// Expected output:
console.log(countVowels("hello")); // 2
console.log(countVowels("typescript")); // 2
