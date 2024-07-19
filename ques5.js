// 5. Write a function that takes an array and returns a new array with duplicates removed.

function quesFive (arr){
    const newArr = [];
    let flag = true;
    newArr.push(arr[0]);
    for(let i=1; i<arr.length; i++){
        for(let j=0; j<newArr.length; j++){
            if(arr[i]===newArr[j]) flag=false;
        }
        if(flag) newArr.push(arr[i]);
        flag = true;
    }
    return newArr;
}
console.log(quesFive([1, 2, 2, 1, 2, 3, 3, 3, 4, 2, 1]));