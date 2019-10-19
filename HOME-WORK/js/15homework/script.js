
// let length = $("#input").val().length // (có thể đặt như này, nhưng gọi let nên nó lag ko đặt đc nữa.cái này chỉ để sau nhìn lại dễ hiểu)
// let valueInput = $("#input").val() // (có thể đặt như này, nhưng gọi let nên nó lag ko đặt đc nữa.cái này chỉ để sau nhìn lại dễ hiểu)
let ccc = Number($("#input").val().charAt($("#input").val().length-1))// đặt cc = giá trị cuối cùng của một dãy String trên thẻ input, lấy charAt của chuỗi bằng cách tham số = đặt độ dài chuỗi - 1

$(".thangtonhat").on("click", function(a) {
	$('#input').val($('#input').val() + a.target.textContent);
});

$("#xoa").on("click", function(){
	$("#input").val("");
})

$("#kq").on("click", function(){
		$("#input").val(eval($("#input").val()))
})

$("#phantram").on("click", function(){
	$("#input").val($("#input").val()/100)
})

$("#mu2").on("click", function(){
	$("#input").val($("#input").val()*$("#input").val())
})

$("#can2").on("click", function(){
	$("#input").val(Math.sqrt($("#input").val()))
})

$("#giaithua").on("click", function(a){
	let n =$("#input").val()
	function tinhgiaithua (n) {
  		if (n==0) return 1;
  		else if ((n%1==0) && (n>0)) {
    		var i=n;
    		for (i=1; i<=n; i=i+1) {
     			var kqgt = (n * tinhgiaithua(n-1));
				return kqgt
    		}
  		}
  		return ;
	}
	$("#input").val(tinhgiaithua(n))
})


