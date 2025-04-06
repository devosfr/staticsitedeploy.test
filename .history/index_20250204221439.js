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
        finalPassword += _a;
        finalPassword += _b;
    }

    firtStringArray.forEach((_a, index1) => {
        debugger;
        if (index1Controll === undefined || index1 > index1Controll) {
            finalPassword += _a;
            index1Controll = index1;
        }
        secondStringArray.forEach((_b, index2) => {
            debugger;

            if (index2Controll === undefined || index2 > index2Controll) {
                finalPassword += _b;
                index2Controll = index2;
                debugger;
            }
        });
    });
    console.log(finalPassword);


}

newPassword('abc', 'xyzt');