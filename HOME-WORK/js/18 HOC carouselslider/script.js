
let data = ["anh1", "anh2", "anh3", "anh4", "anh5"]
let a = 0
let b = data.length-1
function tang(){
	a++
	if (a>b){
		a=0
	}
	return a
}
function giam(){
	a--
	if (a<0){
		a = b
	}
	return a
}

$(".phai").on("click", function(){
	$(".aaa").empty()
	$(".aaa").append(`<img class="anh" src="${data[tang()]}.jpg">`)

})

$(".trai").on("click", function(){
	$(".aaa").empty()
	$(".aaa").append(`<img class="anh" src="${data[giam()]}.jpg">`)

})
