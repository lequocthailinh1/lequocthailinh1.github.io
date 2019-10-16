// Bai1 chuoi
var bai1 = "HELLO world"
var bai1a = bai1.toLowerCase()
var viethoa = function(){
	document.write(`${bai1a.charAt(0).toUpperCase()}${bai1a.substring(1,5)} ${bai1a.charAt(6).toUpperCase()}${bai1a.substring(7)}`)
}
// bai 2
var a = Math.PI
var v = function(x){
	return (`${4/3*a*x*x*x}`)
}

// BAI 4
var bai4 = [
	{name: "Huy", gender: "Male", age: 20},
	{name: "Minh", gender: "Male", age: 26},
	{name: "Thu", gender: "Female", age: 23},
	{name: "hoang", gender: "Male", age: 26},
	{name: "Hang", gender: "Female", age: 18},
	{name: "Nam", gender: "Male", age: 21},
]
var loch = bai4.filter(function(index) {
	if (index.name.charAt(0).toUpperCase() === "H"){
		return index
	}
});


// BAI 1 tong hop
var  bai1 = function(a,b){
	document.write(`x = ${-b/a}`)
}

