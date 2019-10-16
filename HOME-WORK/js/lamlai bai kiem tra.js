
// Bài 2 xử lý số
var bai2 = function (a,b){
	var  kq = 0
	if ((a<b)&&(a%1==0)&&(b%1==0)){
		for (i=a+1;i<b;i++){
			kq = kq + i;
		}
		document.write (`${kq}`);
	}
	else if ((a>b)&&(a%1==0)&&(b%1==0)){
		for (i=b+1;i<a;i++){
			kq = kq + i;
		}
		document.write (`${kq}`);
	}
	else {
		return false;
	}
}







