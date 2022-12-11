
export default function reverseString(word){
    if(!word) return '';
    let result = '';

    for(let i = word.length; i >= 0; i--){
        result+=word.charAt(i);
    }
    return result;
}