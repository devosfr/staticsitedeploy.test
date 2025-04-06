function newPassword(a, b) {
    // Write your code here
    let firtStringArray = a.split('');
    let secondStringArray = b.split('');
    let finalPassword = '';
    let index1Controller;
    firtStringArray.forEach((_a, index1) => {
        debugger;
        finalPassword += _a;
        index1Controller = index1;
        secondStringArray.forEach((_b, index2) => {
            debugger;
            finalPassword += _b;
        });
    });
    console.log(finalPassword);


}

newPassword('abc', 'xyzt');