{

const isPalindrome = (word: string): boolean =>{
    const reversed = word.split('').reverse().join('');
    // console.log(reversed)
    return word === reversed;
}
// console.log(isPalindrome("murad"));


const calculate = (a: number, b: number): [number, number] =>{
    return [a+b, a*b]
}
// console.log(calculate(2,7))

const countVowel = (word: string) =>{
    const vowel: string[] = ["a", "e", "i", "o", "u"];
    let counter: number = 0;
    const stringToArray = word.split('');
    stringToArray.filter(letter =>{
        if(vowel.includes(letter)){
            counter ++;
        }
    })
    return counter;
}
console.log(countVowel("aeiou"));
}