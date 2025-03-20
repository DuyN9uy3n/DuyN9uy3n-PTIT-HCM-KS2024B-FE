let result1 = "javascript" + 5; //javascript5 (noi chuoi)
let result2 = "javascript" - 1; //NaN ( phep tru khong hop le)
let result3 = "3" + 2; //32 (noi chuoi)
let result4 = "5" - 4; // 1 (phep tru hop le)
let result5 = isNaN("123"); // false (chuyen gt "123" sang so khi kt, but no la so san roi)
let result6 = isNaN("hello"); //true chuyen hello thanh so =>> isNaN(NaN) = true
let result7 = Number.isNaN("123"); //false (Number.isNaN(value) chỉ trả về true nếu giá trị thực sự là NaN. va chuoi "chuoi 123" ko phai NaN)
let result8 = Number.isNaN(NaN); //true (NaN thuc su la NaN =>> Number.isNaN(NaN) tra ve true)

document.writeln(result1 + "<br>");
document.writeln(result2 + "<br>");
document.writeln(result3 + "<br>");
document.writeln(result4 + "<br>");
document.writeln(result5 + "<br>");
document.writeln(result6 + "<br>");
document.writeln(result7 + "<br>");
document.writeln(result8 + "<br>");
