//6. Write a function that takes a string and capitalizes the first letter of each word in the string.

function quesSix(str) {
    const words = str.split(' ');
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedStr = capitalizedWords.join(' ');
    console.log(capitalizedStr);
}
quesSix("i am shivansh agrawal");