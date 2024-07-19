// 9. Write a function that filters out even numbers from an array.

function quesNine(arr){
    arr = arr.filter(item=> !(item%2));
    return arr;
}
console.log(quesNine([1, 2, 3, 4, 5, 6]));