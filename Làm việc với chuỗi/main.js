var myString = 'Lê Anh Tuấn'

//1. Lenght: Số lượng 
console.log(myString.length);

//2. find index: Vị trí
console.log(myString.indexOf('h'));
console.log(myString.search('h'));//không có hệ số tìm kiếm sau 

//3. Cut String: Cắt theo vị trí(dùng dấu - để cut ngược lại) 
console.log(myString.slice(3));

// 4. Replace: Thay thế
console.log(myString.replace(/Lê/g, 'Trần'));

// 5. Convert to upper case: Viết hoa  (tolowerCase bỏ biết hoa
console.log(myString.toUpperCase());

// 6. Trim: Loại bỏ khoảng trắng
console.log(myString.trim);

// 8. Split: cắt chuỗi thành Array
var chu = 'Python, PHP, HTML'

console.log(chu.split(', '));

// 9. get a character by index: Lấy phần tử từ vị trí
const myString2 = 'Anh Tuấn'
console.log(myString2.charAt(4));