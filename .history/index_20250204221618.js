function newPassword(a, b) {
    // Write your code here
    let firtStringArray = a.split('');
    let secondStringArray = b.split('');
    let finalPassword = '';
    let index1Controll;
    let index2Controll;
    let _length = firtStringArray.length > secondStringArray.length ? firtStringArray.length : secondStringArray.length;
    debugger;

    for (let i = 0; i < _length; i++) {
        let _a = firtStringArray[i];
        let _b = secondStringArray[i];
        debugger;
        _a && (finalPassword += _a);
        _b && (finalPassword += _b);
    }


    console.log(finalPassword);


}

newPassword('abc', 'xyzt');