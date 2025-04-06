function balancedSum(arr) {
    // Write your code here
    let minus;
    let index;
    for (var i = 0; i < arr.length; i++) {
        let currentLine = arr[i];
        if (currentLine < minus) {
            debugger;
        }
        if (!minus) {
            debugger;
            minus = currentLine;
            index = i;
        }
        console.log('TESTE 2: ', currentLine);
        debugger;
    }
    debugger;

}

balancedSum([1, 2, 3, 3]);