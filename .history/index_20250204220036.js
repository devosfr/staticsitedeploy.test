function newPassword(a, b) {
    // Write your code here
    let firtStringArray = a.split('');
    let secondStringArray = b.split('');
    let finalPassword = '';
    firtStringArray.forEach(_a => {
        debugger;
        finalPassword += _a;
        secondStringArray.forEach(_b => {
            debugger;
            finalPassword += _b;
        });
    });


}

newPassword('abc', 'xyzt');