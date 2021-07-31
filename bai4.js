// sơ đồ 3 khối : 
// khối 1 : Input 
/*****
 * Viết chuong trình nhập và 2 chiều dài và chiều rộng của HCN
 * 
 * chieuDai
 * chieuRong
 * dtHCN
 * cvHCN
 * 
 * Khối 2 : 
 * B1: Tạo và gán giá trị 
 * B2:tính và xuất ra diện tích HCN
 * dtHCN = chieuDai * chieuRong
 * 
 * B3: tính và xuất ra chi vi HCN
 * cvHCN = dtHCN * 2
 * 
 * Khối 3 : output
 * 
 * xuất 2 kết quả trên
 *
 */
// input 
var chieuDai = 10 ;
var chieuRong = 5 ;
var dtHCN = 0;
var cvHCN = 0;
console.log("Bài 4:");
// tinh dien tich
dtHCN = chieuDai * chieuRong ; 
console.log("Diện tích HCN là : " +dtHCN);
// tinh chu Vi
cvHCN = (chieuDai + chieuRong) * 2 ; 
console.log("Chu vi HCN la :"+cvHCN);


