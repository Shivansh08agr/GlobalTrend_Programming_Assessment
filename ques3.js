// 3. Write a function that takes a nested array and returns a flattened array.

function quesThree(nestedArray) {
    let flattened = [];

    function flatten(element) {
        if (Array.isArray(element)) {
            for (let item of element) {
                flatten(item);
            }
        } else {
            flattened.push(element);
        }
    }

    flatten(nestedArray);
    return flattened;
}
console.log(quesThree([1, [2, [3, 4], 5], 6]));