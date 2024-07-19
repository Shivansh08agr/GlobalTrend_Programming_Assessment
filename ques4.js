// 4. Write a function that checks if two given strings are anagrams of each other.

function quesFour(str1, str2){
    str1 = str1.toLowerCase().split('').sort().join('');
    str2 = str2.toLowerCase().split('').sort().join('');

    (str1 === str2) ? console.log("Both the strings are anagrams of each other.") : console.log("The strings are not anagrams of each other.")
}
quesFour("listen", "silent");
quesFour("listen", "hello");
