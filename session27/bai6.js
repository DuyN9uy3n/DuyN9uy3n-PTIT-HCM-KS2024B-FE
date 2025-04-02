function isArithmeticSequence(arr) {
    if (arr.length < 2) {
        return false;
    }

    const difference = arr[1] - arr[0];

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== difference) {
            return false;
        }
    }

    return true;
}

let inputArray = prompt("Nhap cac ptu cach nhau boi dau ,:").split(",").map(Number);

if (inputArray.some(isNaN)) {
    console.log("ko hop le!");
} else {
    const result = isArithmeticSequence(inputArray);
    if (result) {
        console.log("mang la day cap so cong!");
    } else {
        console.log("ko phai day cap so cong!");
    }
}
