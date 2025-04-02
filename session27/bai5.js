function splitArray(arr, n) {
    if (n <= 0) {
        return "Kich thuoc ko hop le";
    }
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}

let inputArray = prompt("Nhap cac ptu cua mang, cach nhau boi dau ,:")
    .split(",")
    .map(Number); 

let n = Number(prompt("Nhap kich thuoc cac mang con:"));

if (!isNaN(n) && Array.isArray(inputArray)) {
    console.log(":", splitArray(inputArray, n));
} else {
    console.log("Du lieu k hop le!");
}
