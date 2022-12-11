const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyza';

export default function caesarCipher(word){
    if(!word){return '';}
    let result = '';

    for(let char of word){
        let curr = char;
        if(upperCaseLetters.includes(char)){
            const indexOfChar = upperCaseLetters.indexOf(char);
            curr = upperCaseLetters.charAt(indexOfChar+ 1);
        }
        else if(lowerCaseLetters.includes(char)){
            const indexOfChar = lowerCaseLetters.indexOf(char);
            curr = lowerCaseLetters.charAt(indexOfChar + 1);
        }
        result+=curr;
    }
    return result;
}