let xhr = new XMLHttpRequest();

//1. Prepare request (mở request)
xhr.open('GET', 'https://minhducluong.github.io/data.html', true);
//2. Send request
xhr.send();

//3. Khi server respond, object xhr sẽ xảy ra event 'load'
//Chúng ta sẽ viết code để xử lý data nhận về khi event này diễn ra.
xhr.addEventListener('load', function() {
	//Nếu status = 200 tức là server đã responded và mọi thứ đều OK thì đổ dữ liệu vào #content

	//Dữ liệu dạng file HTML sẽ truyền từ server về browser dưới dạng text (string), cho nên ta dùng xhr.responseText.
	if (xhr.status == 200) document.getElementById("content").innerHTML = xhr.responseText;
});


//===========================jQuery


//.load() của jQuery chỉ load được DUY NHẤT file HTML
//còn có thể truyền CSS selector vào sau url (ngăn bởi dấu cách) để chỉ lấy phần đó từ file HTML
// $('#content').load('https://minhducluong.github.io/data.html #table1');