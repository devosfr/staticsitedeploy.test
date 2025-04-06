'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */
let valuesArray = [];

function fizzBuzz(n) {
    // Write your code here
    let param = n;
    while (param > 0) {
        console.log(param);
        debugger;
        valuesArray.push(param);
        param -= 1;

    }

    valuesArray.forEach(number => {
        debugger
        let result = number / 3;
        let result2 = number / 5;
        console.log(result);
        debugger;
        if (result === 3 && result2 === 5) {
            debugger;
            console.log('FizzBuzz');
        }
        if (result === 3 && result2 !== 5) {
            debugger;
            console.log('Fizz');
        }
        if (result !== 3 && result2 === 5) {
            debugger;
            console.log('Buzz');
        }
        if (result !== 3 || result2 !== 5) {
            debugger;
            console.log(number);
        }
    });

}


fizzBuzz(15);