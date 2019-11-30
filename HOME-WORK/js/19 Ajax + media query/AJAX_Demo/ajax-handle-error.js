//Demo .done(), .fail(), .always()

//Ví dụ này load file HTML dùng $.get() của jQuery
//Nhắc lại, riêng file HTML có thể dùng thẳng $('#content').load() 

$.get('https://minhducluong.github.io/data.html', function(data) {
	$('#content').html(data);
}).fail(function() { //nếu mà fail thì...
	console.log('Request failed');
}).always(function() {
	console.log('Request completed.')
	//completed là đã hoàn thành, có thể thành công hoặc thất bại.
})


//Nếu dùng .done() thì viết lại như sau

// $.get('https://minhducluong.github.io/data.html')
// .done(function(data) { //.done() giống như kiểu status == 200 (request lên server và nhận response thành công)
// 	$('#content').html(data);
// }).fail(function() {
// 	console.log('Request failed');
// }).always(function() {
// 	console.log('Request completed.')
// })