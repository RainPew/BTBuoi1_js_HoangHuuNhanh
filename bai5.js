/****
 * 
 * SƠ ĐỒ 3 KHỐI
 * 
 * 
 * Khối 1; inputs
 * số nguyên dương có 2 chữ số
 * num
 * 
 * 
 * Khối 2:
 * B1: tạo và gán giá trị
 * num, unit (số hàng đơn vị), dozens(số hàng chục)
 * 
 * B2: lấy số hàng chục 
 * dozens = 12 / 10 
 * 
 * B3: lấy hàng đơn vị 
 * 
 * unit = 12 % 10
 * 
 * 
 * khối 3:
 * tổng của 2 ký số trong số nguyên (12)
 * sum
 */


// tạo và gán giá trị
var num = 12 ; 
var unit = 0 ;
var dozens = 0;

console.log("Bài 5:Tính tổng 2 Ký số (dữ liệu nhập vào là 12)");
// lấy hàng chục 
dozens =Math.floor(num/10);
console.log("hàng Chục:"+ dozens);


// hàng đơn vị 
unit = num%10;
console.log("hàng đơn vị:"+unit)

// Tổng
sum = dozens + unit;
console.log("Tổng: "+sum);
