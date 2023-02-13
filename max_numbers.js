let number = max(1,2);
console.log(number);

function max(a,b) {
    if (a === b)
       return console.log('Both are equal')
    else
       return (a>b) ? a : b;
}