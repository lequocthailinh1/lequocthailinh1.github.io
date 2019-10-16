/*- Bài 1. Viết 1 function tính bình phương của 1 số.

Tham số truyền vào là 1 số.
Kết quả là bình phương của số đó.*/

var square = function(num) {
	return num*num;
}
square(5) //25




/*- Bài 2. Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.

Tham số truyền vào là 1 số nguyên dương.
Kết quả là thế kỷ của năm. Ví dụ 2019 => Kết quả là 21.*/

// Thế kỷ 1 bắt đầu từ năm 1 đến năm 100
// Thế kỷ 2 bắt đầu từ năm 101 đến năm 200
// ...
// Thế kỷ 21 bắt đầu từ năm 2001 đến năm 2100
var century = function(year) {
	return Math.ceil(year/100);
}
century(2019) //21




/*- Bài 3. Cho 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi.

Tham số truyền vào là 1 chuỗi dài hơn 15 ký tự.
Kết quả là chuỗi đó sau khi cắt đi còn 10 ký tự, cuối chuỗi có dấu "..." biểu thị là chuỗi bị cắt.*/

var truncate = function(str) {
	return str.slice(0, 10) + '...';
}
truncate("Hello World Hello World") //"Hello Worl..."





/*- Bài 4. Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.

Tham số truyền vào là 1 chuỗi.
Kết quả là 1 chuỗi mới chỉ viết hoa từ đầu tiên. Ví dụ "techMaster" sẽ được convert thành "Techmaster".*/

var capFirstLetter = function(str) {
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
capFirstLetter("techMaster")