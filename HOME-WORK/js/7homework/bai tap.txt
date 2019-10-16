// BAI TAP TREN ZALO
function btprompt () {
  var a = prompt (`Mời bạn nhập số`)
  if (typeof (a)!="object"){
    if ((Number(a)) || (Number(a)===0)) {
      alert (`Bạn đã nhập số`)
    }
    else {
      alert (`Bạn không nhập số`)
      return btprompt ()
    }
  }
}

// BAI 1 PHAN DIEU KIEN 1
function dk11 (a,b) {
  if ((typeof (a)=="number") && (typeof (b)=="number")) {
    alert (`Là số`);
    if(a>b) alert(`${a} lớn hơn ${b}`)
     else if (a==b) alert(`${b} bằng ${a}`)
      else if (a<b) alert(`${b} lớn hơn ${a}`)
    }
  else {
    alert (`Không là số`)
  }
}

// BAI 2 PHAN DIEU KIEN 1
function tinhgiaithua (n) {
  if (Math.ceil(n) === n) {
    if (n == 0) {
      return 1;
    }
    else if (n > 0) {
      kq = n * tinhgiaithua(n - 1);
      return kq;
    }
  }
  else {
    return (`Bạn ko nhập đúng`)
  }
}

// BAI 4 PHAN DIEU KIEN 1
function account(){
  username = prompt (`Mời bạn nhập Username: Username không quá 10 ký tự`);
  if (username.length <= 10){
    password = prompt (`Password phải từ 6 đến 32 ký tự`);
    if ((6<=password.length) && (password.length <= 32)){
     confirm = prompt (`Mời bạn xác nhận lại Password`);
     if (confirm == password) {
       alert (`Pass`)
     }
     else alert (`Bạn xác nhận sai password: Fail`);
   }
   else alert (`Password phải từ 6 đến 32 ký tự: Fail`)
 }
else alert (`Fail`);
}

// BAI 3 PHAN DIEU KIEN 2
function translate(a) {
  switch (a) {
    case "hello france":
    console.log(`salut`)
    break;
    case "hello germany":
    console.log(`halo`)
    break;
    case "hello danmach":
    console.log(`haj`)
    break;
    case "hello ha lan":
    console.log(`Hallo`)
    break;
    default:
    console.log(`xin chao`)
    break;
  }
}

// BAI 2 PHAN DIEU KIEN 2
function kiemtra(x) {
  if ((x>=0)&&(x<4)){
    document.write (`Dat F`)
  }
  else if ((x>=4)&&(x<5.5)) {
   document.write (`Dat D`)
 }
 else if ((x>=5.5)&&(x<7)) {
   document.write (`Dat C`)
 }
 else if ((x>=7)&&(x<8.5)) {
  document.write (`Dat B`)
}
else if ((x>=8.5)&&(x<=10)) {
  document.write (`Dat A`)
}
}

// BAI 1 PHAN DIEU KIEN 2
function nhapmua(x) {
  var date = now.getDate();
  var year = now.getFullYear();
  var month = x 
  if ((x>1)&&(x<=3)) {
    document.write (`ngày ${date} tháng ${month} năm ${year}, là mùa xuân`)
  }
  else if ((x>3)&&(x<=6)) {
    document.write (`ngày ${date} tháng ${month} năm ${year}, là mùa hạ`)
  }
  else if ((x>6)&&(x<=9)) {
    document.write (`ngày ${date} tháng ${month} năm ${year}, là mùa thu`)
  }
  else if ((x>9)&&(x<=12)) {
    document.write (`ngày ${date} tháng ${month} năm ${year}, là mùa đông`)
  }
}