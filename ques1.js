// 1. Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

function quesOne (){
    for (let i = 1; i <= 100; i++) {
        if(!(i%3) && !(i%5)) console.log("FizzBuzz");
        else if(!(i%3) && (i%5)) console.log("Fizz");
        else if((i%3) && !(i%5)) console.log("Buzz");
        else console.log(i);
    }
}
quesOne();