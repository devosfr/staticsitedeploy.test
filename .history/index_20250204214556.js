function balancedSum(arr) {
    // Write your code here
    let minus = 1;
    for (var i = 0; i < arr.length; i++) {
        let currentLine = arr[i];
        if (currentLine < minus) {
            debugger;
        }
        console.log('TESTE 2: ', currentLine);
        debugger;
    }

}

balancedSum([1, 2, 3, 3]);