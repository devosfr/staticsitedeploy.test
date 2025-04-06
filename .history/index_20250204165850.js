var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

function someFunction(arr) {
    let min = arr[0];
    let max = arr[0];
    sum = sum + arr[0];
    for (var i = 0; i < arr.length; i++) {
        console.log('Current value: ', arr[i]);
        if (arr[i] < min) {
            min = arr[i];
            return;
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    console.log(max - min, max);

}

someFunction(arr);