//======== JS thuần
//*jQuery xem ở dưới

let xhr = new XMLHttpRequest();

xhr.addEventListener('load', function() {
	if (xhr.status == 200) {
		//file json trả về dưới dạng text (cho nên mới responseText)
		//JSON là 1 built-in global object của JS, giống như String, Number
		//JSON.parse() cũng giống kiểu Number.isInteger()
		//JSON.parse() sẽ convert đống data dạng text thành 1 JS object
		const data = JSON.parse(xhr.responseText);
		//data lúc này là 1 object. Có property là films, value là một array
		//data.films sẽ trả về 1 array
		const films = data.films;
		//đến đây biến films giống y hệt biến films trong bài Table


		//KIỂU ĐỔ DỮ LIỆU THỨ 2: tạo chuỗi htmlContent chứa markup, rồi đổ vào innerHTML
		let htmlContent = '';

		htmlContent += `<table>`;
		htmlContent += `
			<tr>
				<th>GENRE</th>
				<th>TITLE</th>
				<th>DURATION</th>
				<th>DATE</th>
			</tr>
		`;
		films.forEach( function(element) {
			htmlContent += `
				<tr>
					<td>${element.genre}</td>
					<td>${element.title}</td>
					<td>${element.duration}</td>
					<td>${element.date}</td>
				</tr>
			`;
		});
		
		htmlContent += `</table>`;

		document.getElementById("content").innerHTML = htmlContent;
	}
})


xhr.open('GET', 'https://minhducluong.github.io/db.json', true);
xhr.send();




//======================= jQuery
//dùng $.getJSON là dành riêng cho request file JSON
//dùng $.get để request data nói chung
// $.getJSON('https://minhducluong.github.io/db.json', function(data) {
// 	console.log(data);
// 	//Với $.getJSON, tham số data truyền vào đã là 1 JS object (đã được parse từ dạng text thành JS object sẵn)
	
// 	//Từ đây trở xuống giống y hệt bên trên
// 	const films = data.films;

// 	let htmlContent = '';

// 	htmlContent += `<table>`;
// 	htmlContent += `
// 		<tr>
// 			<th>GENRE</th>
// 			<th>TITLE</th>
// 			<th>DURATION</th>
// 			<th>DATE</th>
// 		</tr>
// 	`;
// 	films.forEach( function(element) {
// 		htmlContent += `
// 			<tr>
// 				<td>${element.genre}</td>
// 				<td>${element.title}</td>
// 				<td>${element.duration}</td>
// 				<td>${element.date}</td>
// 			</tr>
// 		`;
// 	});
	
// 	htmlContent += `</table>`;

// 	$('#content').html(htmlContent);

// });