// BAI 1 function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.
function changeColor(color1, color2, color3){
	document.getElementById("one").style.color = color1;
	document.getElementById("tow").style.color = color2;
	document.getElementById("three").style.color = color3;
}

// BAI 2 function changeBgColor(color): Thay đổi màu nền của trang thành màu color.
function changeBgClolor(color){
	document.getElementsByTagName("body")[0].style.backgroundColor = color;
}
// BAI 3 function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2
// (tham số truyền vào là id của 2 đoạn văn hoặc thứ tự của đoạn văn).

function doanvan (a,b){
document.getElementById(a).textContent = document.getElementById(b).textContent
}

// BAI 4 function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).
function changeFontSize(x) {
	if (x%1==0){
		document.getElementById("one").style.fontSize = x + "px";
		document.getElementById("tow").style.fontSize = x + "px";
		document.getElementById("three").style.fontSize = x + "px";
	}
	else return
}

// BAI 5 function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn
// (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) lên 1 pixel so với kích thước hiện tại,
// kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle).
function increaseFontSize(a){
	if (Number(document.getElementById(a).style.fontSize.slice(0,2))<30){
		document.getElementById(a).style.fontSize = (Number(document.getElementById(a).style.fontSize.slice(0,2))+1) + "px";
		return document.getElementById(a).style.fontSize
	}
	else return false
}

// BAI 6 function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn (tham số truyền vào là
// id đoạn văn hoặc thứ tự đoạn văn) xuống 1 pixels so với kích thước hiện tại, kích thước giảm xuống không vượt quá 10 pixels.

function increaseFontSize(a){
	if (Number(document.getElementById(a).style.fontSize.slice(0,2))>10){
		document.getElementById(a).style.fontSize = (Number(document.getElementById(a).style.fontSize.slice(0,2))-1) + "px";
		return document.getElementById(a).style.fontSize
	}
	else return false
}

// BAI 5 6 viet dep
var increaseFontSize = function(a){
	// (gọi ra fontsize của a, bỏ đuôi "px")
	var b = Number(document.getElementById(a).style.fontSize.slice(0,2))
	// xét điều kiện
	if (b<30){
		// gọi thằng fonsize của "a" ra rồi thay nó bằng + 1
		document.getElementById(a).style.fontSize = (b+1) + "px";
		// return để xem
		return document.getElementById(a).style.fontSize
	}
	// vượt quá 30 sẽ báo false
	else return false
}