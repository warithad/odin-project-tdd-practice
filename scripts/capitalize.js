export default function capitalize(word){
    if(!word){return '';}
    
    const firstLetter = word.charAt(0);
    word = word.replace(firstLetter, firstLetter.toUpperCase());

    return word;
}

