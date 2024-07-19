//7. Write a function that generates the first n numbers of the Fibonacci sequence.

function quesSeven (n){
    if(n<=1) return n;
    return quesSeven(n-1) + quesSeven(n-2);
}
console.log(quesSeven(8));