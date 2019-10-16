let clicks = document.getElementsByTagName("div")[0]
clicks.addEventListener("click", function(a){
	 document.getElementById("input").value += a.target.innerHTML
})

document.getElementById("xoa").addEventListener("click", function(){
	document.getElementById("input").value = ""
})

document.getElementById("kq").addEventListener("click", function(){
	document.getElementById("input").value = eval(document.getElementById("input").value)
})

let pt = document.getElementById("phantram")
pt.addEventListener("click", function(){
	document.getElementById("input").value = document.getElementById("input").value/100;
})
let  mu2 = document.getElementById("mu2")
mu2.addEventListener("click", function(){
	document.getElementById("input").value = document.getElementById("input").value*document.getElementById("input").value;
})
let  can2 = document.getElementById("can2")
can2.addEventListener("click", function(){
	document.getElementById("input").value = Math.sqrt(document.getElementById("input").value);
})

let n = document.getElementById("input").value;
function tinhgiaithua (n) {
  if (n==0) return 1;
  else if ((n%1==0) && (n>0))  {
    var i=n;
    for (i=1; i<=n; i=i+1) {
     var kqgt = (n * tinhgiaithua(n-1));
	return kqgt
    }
  }
  return ;
}
let tgt = document.getElementById("giaithua");
tgt.addEventListener("click", function(){
	document.getElementById("input").value = tinhgiaithua (document.getElementById("input").value)
})

