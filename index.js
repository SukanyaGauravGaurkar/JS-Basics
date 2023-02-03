
const fizzBuzzResult = fizzBuzz(8);
console.log(fizzBuzzResult);

function fizzBuzz(number) {
    if (typeof number != 'number')
       return NaN;
    if ((number%3 === 0) && (number%5 === 0))
       return 'FizzBuzz';
    if (number%3 === 0)
       return 'Fizz';
    if (number%5 === 0)
       return 'Buzz';
    return number;

}
