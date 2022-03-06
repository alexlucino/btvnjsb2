var currentFormat = new Intl.NumberFormat("vn-VN");

//Bài 1
document.getElementById("btnTongB1").onclick = function () {
  var luongNgay = document.getElementById("luongNgay").value;
  var soNgayLam = document.getElementById("soNgayLam").value;
  var tongThangLuong = luongNgay * soNgayLam;
  var kqThangLuong = "Tổng tháng lương là: " + currentFormat.format(tongThangLuong);
  document.getElementById("tongB1").innerHTML = kqThangLuong;
  document.getElementById("tongB1").classList.add("btn");
  document.getElementById("tongB1").classList.add("btn-info");
};

// Bài 2
document.getElementById("btnTongB2").onclick = function () {
  var number1 = document.getElementById("txtNumber1").value * 1;
  var number2 = document.getElementById("txtNumber2").value * 1;
  var number3 = document.getElementById("txtNumber3").value * 1;
  var number4 = document.getElementById("txtNumber4").value * 1;
  var number5 = document.getElementById("txtNumber5").value * 1;
  var trungBinh = (number1 + number2 + number3 + number4 + number5) / 5;
 var kqTrungBinh = "Tổng trung bình là: " + trungBinh;
 document.getElementById("tongB2").innerHTML = kqTrungBinh;
 document.getElementById("tongB2").classList.add("btn");
 document.getElementById("tongB2").classList.add("btn-info");
};

// Bài 3
document.getElementById("btnDoiUSD").onclick=function(){
  var giaUSD = 23500;
  var tienVND = giaUSD * document.getElementById("soLuongUSD").value;
  var kqTienVND = "Số tiền quy đổi là: " + currentFormat.format(tienVND) + " VND";
  document.getElementById("doiTienVND").innerHTML = kqTienVND;
  document.getElementById("doiTienVND").classList.add("btn");
  document.getElementById("doiTienVND").classList.add("btn-info");
}

// Bài 4
document.getElementById("btnDienTich").onclick=function(){
  var chieuDai = document.getElementById("chieuDaiHCN").value;
  var chieuRong = document.getElementById("chieuRongHCN").value;
  var dienTichHCN = chieuDai*chieuRong;
  var kqDienTichHCN = "Diện tích là: " + dienTichHCN;
  document.getElementById("kqHCN").innerHTML=kqDienTichHCN;
  document.getElementById("kqHCN").classList.add("btn");
  document.getElementById("kqHCN").classList.add("btn-info");
}
document.getElementById("btnChuVi").onclick=function(){
  var chieuDai = document.getElementById("chieuDaiHCN").value*1;
  var chieuRong = document.getElementById("chieuRongHCN").value*1;
  var chuViHCN = (chieuDai + chieuRong)*2;
  var kqChuViHCN = "Chu vi là: " + chuViHCN;
  document.getElementById("kqHCN").innerHTML=kqChuViHCN;
  document.getElementById("kqHCN").classList.add("btn");
  document.getElementById("kqHCN").classList.add("btn-info");
}

// Bài 5
document.getElementById("btnTinh2KySo").onclick=function(){
  var soDonVi = document.getElementById("giaTri2KySo").value % 10;
  var soChuc = document.getElementById("giaTri2KySo").value / 10;
  var tong2KySo = soDonVi + Math.floor(soChuc);
  var kq2KySo = "Tổng là: " + tong2KySo;
  document.getElementById("tong2KySo").innerHTML=kq2KySo;
  document.getElementById("tong2KySo").classList.add("btn");
  document.getElementById("tong2KySo").classList.add("btn-info");
}