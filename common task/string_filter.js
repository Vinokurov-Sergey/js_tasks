const string = "Привет! Как дела?";

function getVowels(filterString) {

    let vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'];
    let vowelsString = '';

    for (let i=0; i<filterString.length; i++) {

        let letter = filterString[i].toLowerCase();

        if (vowels.includes(letter)) {

            vowelsString += filterString[i];
        }
        
    }

    return vowelsString;
}

console.log(getVowels(string));