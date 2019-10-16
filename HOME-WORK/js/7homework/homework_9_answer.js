// Viết function giải quyết vấn đề sau:
// - Làm xuất hiện hộp thoại prompt "Mời bạn nhập số"
// - Nếu người dùng nhập số, alert ra "Bạn đã nhập số"
// - Nếu người dùng nhập ký tự khác số, alert ra "Bạn không nhập số"
// - Nếu người dùng bấm Cancel, hộp thoại prompt biến mất

// Lưu ý trường hợp người dùng nhập số 0.

// [Nâng cao - Không bắt buộc]
// Nếu người dùng nhập ký tự khác số, hiển thị lại hộp thoại prompt "Mời bạn nhập số" cho tới khi người dùng nhập đúng dạng số. 

var promptForNumber = function() {
	var input = prompt("Mời bạn nhập 1 số:");

	if (input) {
	// Nếu user không bấm cancel (input khác null) thì bắt đầu xử lý
		var inputToNumber = Number(input);

		if (inputToNumber || inputToNumber === 0) {
			alert("Bạn đã nhập số thành công");
		} else {
			alert("Input bạn nhập không hợp lệ.");
			promptForNumber();
		}
	}
}
//promptForNumber();
// Test case: 1.5 | 0 | "abc" | $$$ | bấm-cancel











/*
	=====================
	 Điều kiện rẽ nhánh 1
	=====================
*/

// Bài 1: Sử dụng câu lệnh if để viết 1 hàm với 2 tham số bất kỳ, kiểm tra xem 2 tham số có phải là number không và tìm ra số lớn nhất trong 2 số đó.
var isNumber = function(num) {
	if (!isNaN(num) && typeof num === "number") return true;
	// vì sao cần return? (*)
	else return false;
}

var isHigher = function(a, b) {
	// vì sao cần return? (*) - vì chỗ này mình cần 1 giá trị (value) trả về của hàm isNumber
	if (isNumber(a) && isNumber(b)) console.log(Math.max(a, b));
	else console.warn('Có ít nhất 1 số không phải number.')
}

//isHigher(isNumber, 0.5, 0.3);
//Test case: (0.2, '0.3') | (0.2, 'abc')



//- Bài 2. Viết 1 hàm dùng để tính giai thừa của 1 số. Kiểm tra tham số đầu vào phải là 1 số nguyên >= 0, sau đó tính giai thừa và in ra kết quả.

	// Bước 1: kiểm tra input có phải số nguyên >= 0 không?
var checkNumber = function (num) {
	var isNumber = !isNaN(num);
	var isInteger = Number.isInteger(num); //thêm Number.isInterger() vào kho!, isInteger là hàm check số nguyên

	if (isNumber && isInteger && num >= 0) return true;
	else return false;
}

	//Bước 2: tính giai thừa
var factorialCalc = function (num) {

	if (checkNumber(num)) {

		if (num == 0) return 1;
		else return factorialCalc(num - 1) * num;

	} else console.warn('Input không hợp lệ. Hãy nhập số NGUYÊN >= 0. Thanks!');
}



// Bài 4. Một trang web cho phép người dùng tạo tài khoản. Hãy viết hàm kiểm tra tính hợp lệ của thông tin người dùng nhập vào. Nếu hợp lệ trả về "Pass", nếu không hợp lệ trả về "Fail".

// Giả sử tham số đầu vào là 1 object có dạng như sau (giá trị của thuộc tính là do người dùng nhập và đều là chuỗi):
// {
// 	username: "username",
// 	password: "secret",
// 	confirm: "secret"
// }
// Hãy kiểm tra username phải khác rỗng và không được vượt quá 20 ký tự, password phải có độ dài từ 6 đến 32 ký tự, confirm phải giống password.

var validate = function (user) {
	var name = user.username.trim(); //.trim() để loại bỏ khoảng trống, phòng trường hợp username = '       '
	var pass = user.password;
	var conf = user.confirm;

	var namePassed = (name != '' && name != null && name.length <= 20);

	var passPassed = (6 <= pass.length && pass.length <= 32);

	var confPassed = (conf === pass);

	if (namePassed && passPassed && confPassed) alert('Pass');
	else alert('Fail');

	// Thêm tính năng thông báo cái gì không hợp lệ
	if (!namePassed) alert('username không hợp lệ');
	if (!passPassed) alert('password không hợp lệ');
	if (!confPassed) alert('confirm không hợp lệ');
}

// validate(user = {username: 'username', password: 'secret', confirm: 'secret'});	
// validate(user = {username: '', password: '', confirm: ''});















/*
	=====================
	 Điều kiện rẽ nhánh 2
	=====================
*/

// - Bài 1. In ra màn hình ngày, tháng năm hiện tại và xác định đó là mùa nào trong năm.

var printToday = function() {
	var today = new Date();

	var date = today.getDate();
	var month = today.getMonth() + 1;
	var year = today.getFullYear();

	var text = `Hôm nay là ngày ${date} tháng ${month} năm ${year}`;

	switch (month) {
		case 2:
		case 3:
		case 4:
			alert(`${text}. Đang là mùa xuân các bác ạ.`);
			break;

		case 5:
		case 6:
		case 7:
			alert(`${text}. Đang là mùa hè các bác ạ.`);
			break;

		case 8:
		case 9:
		case 10:
			alert(`${text}. Đang là mùa thu các bác ạ.`);
			break;

		case 11:
		case 12:
		case 1:
			alert(`${text}. Đang là mùa đông các bác ạ.`);
			break;
	}
}

// - Bài 2. Một sinh viên có điểm kiểm tra môn lập trình web là x dưới dạng số (0 <= x <= 10). Hãy chuyển điểm số sang dạng chữ với điều kiện sau:
// 		Từ 8.5 đến 10: Điểm A
// 		Từ 7 đến dưới 8.5: Điểm B
// 		Từ 5.5 đến dưới 7: Điểm C
// 		Từ 4 đến dưới 5.5: Điểm D
// 		Từ 0 đến dưới 4: Điểm E

var scoreTransfer = function(score) {

	if (0 <= score && score < 4) return 'Điểm F'
	else if (4 <= score && score < 5.5) return 'Điểm D'
	else if (5.5 <= score && score < 7) return 'Điểm C'
	else if (7 <= score && score < 8.5) return 'Điểm B'
	else if (8.5 <= score && score < 10) return 'Điểm A'
}

// - Bài 3. Viết hàm translate() có tác dụng dịch từ "Hello" sang 5 thứ tiếng khác nhau (tự chọn) với tham số truyền vào là mã quốc gia, sử dụng switch và mặc định dịch sang tiếng Việt.
var translate = function(country) {
	switch (country) {
		case "Spanish":
		return "Hola";
		break;

		case "Thai":
		return "สวัสดี";
		break;

		case "Russian":
		return "Привет";
		break;

		case "Japanese":
		return "こんにちは";
		break;

		case "Korean":
		return "여보세요";
		break;
		
		default:
		return "Xin chào";
	}
}


