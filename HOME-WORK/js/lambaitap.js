// - Bài 1. Viết 1 function tính bình phương của 1 số.
// Tham số truyền vào là 1 số.
// Kết quả là bình phương của số đó.
var bai1 = function(x){
  document.write(`${x*x}`)
}
// - Bài 2. Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.
// Tham số truyền vào là 1 số nguyên dương.
// Kết quả là thế kỷ của năm. Ví dụ 2019 => Kết quả là 21.
// Gợi ý: Sử dụng các phương thức của object Math để làm tròn, bao gồm: Math.floor, Math.ceil và Math.round.
var theky = function(x){
  if(x%1==0){
    var kq = Math.ceil(x/100)
    document.write(`${kq}`)
  }
  else return;
}

// - Bài 3. Cho 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi.
// Tham số truyền vào là 1 chuỗi dài hơn 15 ký tự.
// Kết quả là chuỗi đó sau khi cắt đi còn 10 ký tự, cuối chuỗi có dấu "..." biểu thị là chuỗi bị cắt.
function bai3 (){
  var chuoi = "chuoi muoi lam ky tu"
  document.write (`${chuoi.substring(0,10)}...`)
}

// - Bài 4. Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.
// Tham số truyền vào là 1 chuỗi.
// Kết quả là 1 chuỗi mới chỉ viết hoa từ đầu tiên. Ví dụ "techMaster" sẽ được convert thành "Techmaster".
var bai4 = function() {
  var viethoa = "lequocthailinh"
  var a = viethoa.charAt(0)
  var b = viethoa.substring(1)
  var c = a.toUpperCase()
  var d = b.toLowerCase(1)
  document.write(`${c+d}`)
}

//  Bài 5. Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.
// Tham số truyền vào là 1 mảng các số.
// Kết quả là số nhỏ nhất trong mảng.
// Gợi ý: có thể dùng phương thức sort() hoặc object Math, chú ý khi sort số khác với chữ.
var bai5 = [134,2,23,4,5,6,7,8,9,10,13,16,17,95,42]
var sapxepso = bai5.sort(function(a,b){
	return a-b
})
var locso = sapxepso[0];

// - Bài 6. Cho 1 mảng gồm tên của 5 học viên. Hãy viết function sắp xếp lại thứ tự các học viên theo 
// bảng chữ cái và in ra màn hình danh sách học viên.
// Tham số truyền vào là 1 mảng gồm tên của 5 người.
// Kết quả: In ra màn hình danh sách các học viên theo thứ tự bảng chữ cái (tiếng Anh), mỗi người trên 1 dòng.
// Gợi ý: dùng phương thức join() để biến 1 mảng thành 1 chuỗi và chèn thêm ký tự <br> để hiển thị xuống dòng trong HTML.

var bai6 = ["Nam", "Trung", "Duc", "Hoa", "Thuy"]
var sapxep = bai6.sort()
sapxep.forEach( function(element) {
  document.write(`<br>${element}`)
});

// - Bài 1. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép chuỗi đó lên 10 lần, 
// ngăn cách nhau bởi ký tự "-". Ví dụ cho chuỗi "123" thì kết quả sẽ là "123-123-123-123-123-123-123-123-123-123".

var bai1 = "123"
for (var i=0;i<=10;i++){
  document.write(`${bai1}`)
  if (i==10) break;
  document.write(`-`)
}

// - Bài 2. Cho 1 số nguyên dương n. Viết hàm tính n giai thừa (n!). Ví dụ: n = 5, kết quả trả về là 5! = 1 * 2 * 3 * 4 * 5 = 120.
var bai2 = function (n) {
  if (n==0) return 1;
  else if((n%1==0)&&(n>0)) {
     for (var i = 1; i <=n; i++) {
    var kq = n*bai2(n-1)
       return kq
     }
   }
}

// - Bài 3. Cho 1 chuỗi, hãy viết hàm đảo ngược chuỗi đó. 
// Ví dụ cho chuỗi "hello" thì kết quả trả về sẽ là "olleh". Gợi ý: 1 chuỗi tương tự 1 mảng với mỗi phần tử là 1 ký tự trong chuỗi.

var bai3 = "Hello World"
for (var i = bai3.length; i >= 0; i--) {
  document.write(`${bai3.charAt(i)}`)
}


// - Bài 4. Cho 1 mảng tên của n học viên. Viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và
// in ra màn hình danh sách học viên kèm theo số thứ tự (sử dụng document.write()).
var bai4 = ["Nam", "Minh", "Thuy", "Hang", "Ngoc", "Tuan", "Khanh", "Anh"]
var sapxep = bai4.sort()
var inra = sapxep.forEach( function(element, index) {
  document.write(`${index+1} ${element}</br>`)
});

// - Bài 5. Cho 1 mảng các số. Viết function tạo ra 1 mảng mới với các số là số dư tương ứng khi chia các số trong mảng cũ cho 2.
// Gợi ý: Để lấy số dư của 1 số cho 2 ta dùng toán tử %. Ví dụ: 5 % 2 = 1 (5 chia 2 dư 1).
var bai5 = [5,2,6,2,7,23,3,61,53,66,5,21,6,32,5,12,78]
var newbai5 = bai5.map(function(item){
  return item%2
})

// - Bài 6. Chỉ dùng vòng lặp for hoặc while, viết function in ra màn hình các số từ 1 đến 100 
// sao cho những giá trị là chẵn sẽ có màu xanh, những giá trị là lẻ có màu đỏ.

for (var i = 1; i <= 100; i++) {
  if (i%2==0){
    document.write(`<div style="color: red">${i}</div>`)
  }
  else {
    document.write(`<div style="color: blue">${i}</div>`)
  }
}

// - Bài 1. Sử dụng câu lệnh if để viết 1 hàm với 2 tham số bất kỳ, kiểm tra xem 2 tham số có phải là number
// không và tìm ra số lớn nhất trong 2 số đó.

var bai1 = function(a,b){
  if ((typeof (a)=="number")&&(typeof (b)=="number")){
    if(a<b){
      document.write(`${a} nho hon ${b}`)
    }
    else if (a>b){
      document.write(`${b} nho hon ${a}`)
    }
    else if (a==b){
      document.write(`${a} bang ${b}`)
    }
  }
  else return
}

// - Bài 3. Cho 1 mảng các số bất kỳ. Tạo ra 1 mảng mới chỉ chứa các số chẵn lấy ra từ mảng trên và sắp xếp theo thứ tự giảm dần.
var bai3 = [23,12,4,636,12,6,67,3,60,23,7,12,7,13,6247,384,96,125,36234,436,85]
var newbai3 = bai3.filter(function(a){
      return a%2==0
  })
var sapxep = newbai3.sort(function(b,c){
  return b-c
})
document.write(`${sapxep}`)

// - Bài 4. Một trang web cho phép người dùng tạo tài khoản. Hãy viết hàm kiểm tra tính hợp lệ của thông tin người dùng nhập vào. Nếu hợp lệ trả về 
// Pass", nếu không hợp lệ trả về "Fail".
// Giả sử tham số đầu vào là 1 object có dạng như sau (giá trị của thuộc tính là do người dùng nhập và đều là chuỗi):
// {
//   username: "username",
//   password: "secret",
//   confirm: "secret"
// }
// Hãy kiểm tra username phải khác rỗng và không được vượt quá 20 ký tự, password phải có độ dài từ 6 đến 32 ký tự, confirm phải giống password.

var check = function(a,b,c){
  username = prompt(`nhập tên`),
  password = prompt(`nhập pass`),
  confirm = prompt(`xac nhan`)
  if (((username != "")&&(username<=20))&&((password<=6)&&(password<=32))&&(password===confirm)){
    alert  (`Pass`)
  }
  else alert (`Fail`)
}

// - Bài 4. Cho 1 mảng chỉ gồm các giá trị true và false. Hãy kiểm tra xem giá trị true xuất hiện lần đầu trong mảng ở vị trí nào.

var bai4 = [false,false,false,true, false,true, false,true, false,true, false,true, false,true]
var filterbai4 = bai4.filter(function(element, index) {
  if (element == true){
    console.table(`${index} ${element}`)
  }
  else return
});


