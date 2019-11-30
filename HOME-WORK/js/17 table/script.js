
let films = [
		{genre: "Animation", title: "Wildfood", duration: "03:47", date: "2014-07-16"},
		{genre: "Film", title: "The Deer", duration: "06:24", date: "2014-02-28"},
		{genre: "Animation", title: "The Ghost", duration: "11:40", date: "2012-04-10"},
		{genre: "Film", title: "Animals", duration: "06:40", date: "2005-12-21"},
		{genre: "Animation", title: "Wagons", duration: "21:40", date: "2007-04-12"},
		{genre: "Animation", title: "Wildfood", duration: "03:47", date: "2014-07-16"},
		{genre: "Film", title: "The Deer", duration: "06:24", date: "2014-02-28"},
		{genre: "Animation", title: "The Ghost", duration: "11:40", date: "2012-04-10"},
		{genre: "Film", title: "Animals", duration: "06:40", date: "2005-12-21"},
		{genre: "Animation", title: "Wagons", duration: "21:40", date: "2007-04-12"},
		{genre: "Animation", title: "Wildfood", duration: "03:47", date: "2014-07-16"},
		{genre: "Film", title: "The Deer", duration: "06:24", date: "2014-02-28"},
		{genre: "Animation", title: "The Ghost", duration: "11:40", date: "2012-04-10"},
		{genre: "Film", title: "Animals", duration: "06:40", date: "2005-12-21"},
		{genre: "Animation", title: "Wagons", duration: "21:40", date: "2007-04-12"},
		{genre: "Animation", title: "xWildfood", duration: "03:47", date: "2014-07-16"},
		{genre: "Film", title: "The Deer", duration: "06:24", date: "2014-02-28"},
		{genre: "Animation", title: "The Ghost", duration: "11:40", date: "2012-04-10"},
		{genre: "Film", title: "Animals", duration: "06:40", date: "2005-12-21"},
		{genre: "Animation", title: "Wagons", duration: "21:40", date: "2007-04-12"},
	];

films.forEach(function(a){
	$("tbody").append(`
		<tr>
			<td>${a.genre}</td>
			<td>${a.title}</td>
			<td>${a.duration}</td>
			<td>${a.date}</td>
		</tr>
	`)
})

// Lọc genre
$(".g").on("click", function() {
	$("tr:not(.thead)").remove() //xóa bảng cũ
	let gfilms = films.sort(function(b,c){
   		if (b.genre < c.genre) return -1;
   		else if (b.genre > c.genre) return 1;
   		else return 0;
	})	//lọc bảng mới tên là gfilms (sắp xếp theo geren)
	gfilms.forEach(function(a){
	$("tbody").append(`
		<tr>
			<td>${a.genre}</td>
			<td>${a.title}</td>
			<td>${a.duration}</td>
			<td>${a.date}</td>
		</tr>
	`)
	}) //sắp xếp bảng mới
	$("tr:odd").css("background-color", "#ceced7"); //cho nó thành những cái chẵn có màu
})





// Lọc title
$(".t").on("click", function() {
	$("tr:not(.thead)").remove()
	let tfilms = films.sort(function(b,c){
   		if (b.title < c.title) return -1;
   		else if (b.title > c.title) return 1;
   		else return 0;
	})
	tfilms.forEach(function(a){
	$("tbody").append(`
		<tr>
			<td>${a.genre}</td>
			<td>${a.title}</td>
			<td>${a.duration}</td>
			<td>${a.date}</td>
		</tr>
	`)
	})
	$("tr:odd").css("background-color", "#ceced7");
})

// Lọc duration
$(".d").on("click", function() {
	$("tr:not(.thead)").remove()
	let dfilms = films.sort(function(b,c){
   		if (b.duration < c.duration) return -1;
   		else if (b.duration > c.duration) return 1;
   		else return 0;
	})

	dfilms.forEach(function(a){
	$("tbody").append(`
		<tr>
			<td>${a.genre}</td>
			<td>${a.title}</td>
			<td>${a.duration}</td>
			<td>${a.date}</td>
		</tr>
	`)
	})
	$("tr:odd").css("background-color", "#ceced7");
})


// Lọc date
$(".dt").on("click", function() {
	$("tr:not(.thead)").remove()
	let dtfilms = films.sort(function(b,c){
   		if (c.date < b.date) return -1;
   		else if (c.date > b.date) return 1;
   		else return 0;
	})
	dtfilms.forEach(function(a){
	$("tbody").append(`
		<tr>
			<td>${a.genre}</td>
			<td>${a.title}</td>
			<td>${a.duration}</td>
			<td>${a.date}</td>
		</tr>
	`)
	})
	$("tr:odd").css("background-color", "#ceced7");
})


$("tr:odd").css("background-color", "#ceced7");









// DAT LAM
// films.forEach(function(film) {
//     $("tbody").append(`
//     <tr>
//         <td>${film['genre']}</td>
//         <td>${film['title']}</td>
//         <td>${film['duration']}</td>
//         <td>${film['date']}</td>
//     </tr>`)
// });



// ANH TUAN
// $('td.short').on('click',function(){
// 			films.sort(function(a,b){
// 				if(a.genre<b.genre)
// 					return 1;
// 				else if(a.genre>b.genre)
// 					return -1;
// 				else return 0;
// 			});

// $(".genre").on("click",function(event) {

// });