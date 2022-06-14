function specialCounter(str){
    let countWords=1;
    let countVowels=0;
    let countChars=0;
    while(str.charAt(countChars) != '.') {
        let char = str.charAt(countChars);
        if(char == ' '){
            countWords++;
        }
        else if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'y' ||
                char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U' || char == 'Y'   ){
            countVowels++;
        }
        countChars++;
    }
    return {
        "Words":countWords,
        "Vowels":countVowels,
        "Chars":countChars
    }

}
const TEST_STRING = 'Ceci est un paragraphe de test de fonctions speciales power ranger vikings, Zeus m\'en veut toujours d\'avoir tue son chien.'
console.log(specialCounter(TEST_STRING));