//10.  Write a function that converts a given string to title case (capitalizing the first letter of each word).

// same as question 6.

function quesTen(str) {
    const words = str.split(' ');
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedStr = capitalizedWords.join(' ');
    console.log(capitalizedStr);
}
quesTen("i am shivansh agrawal");