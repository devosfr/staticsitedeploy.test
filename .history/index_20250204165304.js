var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function someFunction(arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = arr[0];
    for (var i; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] < min) {
            min = arr[i];
            return;
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    console.log(min, max);

}

someFunction(arr);