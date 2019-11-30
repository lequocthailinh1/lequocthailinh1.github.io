//Click vào "Hello World" để lấy data
$('h1').on('click', function() {
	$.ajax({
		url: 'https://my-json-server.typicode.com/minhducluong/minhducluong.github.io/db',
		type: 'GET',
		dataType: 'json',
		beforeSend: function() {
			$('#additional').text('Loading...');
		},
		complete: function() { //giống kiểu .always()
			$('#additional').text('Done!');
		},
		error: function() { //giống kiểu .fail()
			$('#additional').text('Failed');
		},
		success: function(data) { //giống kiểu .done()
			let films = data.films;

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

			$('#content').html(htmlContent);
		}
	});
});
