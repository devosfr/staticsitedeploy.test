var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let min = arr[0];
let max = arr[0];
let sum = arr[0];

function someFunction(arr) {

    // for (var i = 0; i < arr.length; i++) {
    //     console.log('Current value: ', arr[i]);
    //     sum += arr[0];
    //     if (arr[i] < min) {
    //         min = arr[i];
    //         return;
    //     }
    //     if (arr[i] > max) {
    //         max = arr[i];
    //     }
    // }
    let result = arr.reduce((acc, current) => {
        if (current < min) {
            min = current;
            return;
        }

        if (current > max) {
            max = current;
        }
        acc += current;
        debugger;
    }, 1);
    debugger;

    console.log(sum - max, sum - min);

}

someFunction(arr);