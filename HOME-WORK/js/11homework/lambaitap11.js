
//  Bài 1. Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.
// Tham số truyền vào là 1 mảng các số.
// Kết quả là số nhỏ nhất trong mảng.
// Gợi ý: có thể dùng phương thức sort() hoặc object Math, chú ý khi sort số khác với chữ.
var bai5 = [134,2,23,4,5,6,7,8,9,10,13,16,17,95,42]
var sapxepso = bai5.sort(function(a,b){
	return a-b
})
var locso = sapxepso[0];

// - Bài 2. Cho 1 chuỗi, hãy viết hàm đảo ngược chuỗi đó. 
// Ví dụ cho chuỗi "hello" thì kết quả trả về sẽ là "olleh". Gợi ý: 1 chuỗi tương tự 1 mảng với mỗi phần tử là 1 ký tự trong chuỗi.

var bai3 = "Hello World"
for (var i = bai3.length; i >= 0; i--) {
  document.write(`${bai3.charAt(i)}`)
}


// - Bài 3. Cho 1 mảng tên của n học viên. Viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và
// in ra màn hình danh sách học viên kèm theo số thứ tự (sử dụng document.write()).
var bai4 = ["Nam", "Minh", "Thuy", "Hang", "Ngoc", "Tuan", "Khanh", "Anh"]
var sapxep = bai4.sort()
var inra = sapxep.forEach( function(element, index) {
  document.write(`${index+1} ${element}</br>`)
});

// - Bài 4. Cho 1 mảng các số. Viết function tạo ra 1 mảng mới với các số là số dư tương ứng khi chia các số trong mảng cũ cho 2.
// Gợi ý: Để lấy số dư của 1 số cho 2 ta dùng toán tử %. Ví dụ: 5 % 2 = 1 (5 chia 2 dư 1).
var bai5 = [5,2,6,2,7,23,3,61,53,66,5,21,6,32,5,12,78]
var newbai5 = bai5.map(function(item){
  return item%2
})


// - CHUA XONG CHUA XONG CHUA XONG CHUA XONG CHUA XONG Bài 5. Cho 1 mảng chỉ gồm các giá trị true và false. Hãy kiểm tra xem giá trị true xuất hiện lần đầu trong mảng ở vị trí nào.
var bai4 = [false,false,false,true, false,true, false,true, false,true, false,true, false,true]
var filterbai4 = bai4.filter(function(element, index) {
  if (element == true){
    console.table(`${index} ${element}`)
  }
  else return
});


// - CHUA XONG CHUA XONG CHUA XONG CHUA XONG CHUA XONG CHUA XONG Bài 6. Viết hàm truyền vào một mảng các số và tính ra tổng các số đó. 

function tinhtong (){
  var a = [a,b,c,4]
  for (i=0;i<=a.length;i++){
  return a[i]+a[i+1];
  }
}


// - Bài 7: Cho một mảng các chuỗi là tên các học viên. Viết hàm lọc ra những học viên  có tên bắt đầu bằng chữ H (không phân biệt hoa thường).

var bai7 = [
  {name: "Trinh", gender:"female"},
  {name: "Truong", gender:"male"},
  {name: "Nam", gender:"male"},
  {name: "Thuy", gender:"female"},
  {name: "Hang", gender:"female"},
  {name: "Minh", gender:"male"},
  {name: "Linh", gender:"female"},
  {name: "Duc", gender:"male"},
  {name: "huy", gender:"male"},
  {name: "hanh", gender:"male"}
]
var loch = bai7.filter(locten)
function locten (a){
  if ((a.name.charAt(0)==="H")||(a.name.charAt(0)==="h")) {
    return a;
  }
}

// - Bài 9:
// Một toà lâu đài có 100 cánh cửa, ban đầu ở trạng thái đóng.

// Bạn sẽ đi thăm toà lâu đài đó 100 lần.

// Mỗi lần đi thăm sẽ tác động lên một số cánh cửa. Tác động nghĩa là nếu cánh cửa đang đóng thì mở nó, nếu cánh cửa đang mở thì đóng nó.

// Lần đi thăm thứ nhất, tác động vào tất cả các cánh cửa. (tức là sẽ mở 100 cánh cửa đang đóng. Lúc này 100 cánh cửa đều mở.)

// Lần đi thăm thứ 2, tác động vào các cánh cửa số 2, 4, 6, ..., 98, 100. (tức là đóng các cánh cửa số 2, 4, 6, ...)

// Lần đi thăm thứ 3, tác động vào các cánh cửa số 3, 6, 9, ..., 96, 99.

// Cứ như thế... cho tới khi:

// Lần đi thăm thứ 100, tác động vào duy nhất cánh cửa số 100.

// **Câu hỏi**
// Ký hiệu 1 là open, 0 là closed
// Dùng 1 mảng để diễn tả trạng thái của 100 cánh cửa như sau
// doorsStatus = [0, 0, 0, 0, ..., 0] (100 số 0)
// Sau lần thăm thứ nhất, doorsStatus = [1, 1, ..., 1] (100 số 1)
// ...
// Sau lần thăm thứ 100, doorsStatus = ???

