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
        param -= 1;
        console.log(param);
        debugger;
        valuesArray.push(param);
    }
    let result = n / 3;
    let result2 = n / 5;
    console.log(result);
    debugger;
    if (result === 3 && result2 === 5) {
        debugger;
        console.log('FizzBuzz');
    }
    if (result2 === 5) {
        debugger;
        console.log('FizzBuzz');
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}
