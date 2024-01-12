// switch case:
//-Dễ đọc và gọn gàng khi kiểm tra cùng một biểu thức cho nhiều giá trị.
//-Tiện lợi khi có nhiều trường hợp cụ thể.
//if else:
//Linh hoạt và có thể kiểm tra nhiều điều kiện khác nhau.
//Có thể sử dụng biểu thức điều kiện phức tạp.
//so sánh trong 1 khoảng giá trị
let a = +prompt("nhập");
if(a > 2){
    console.log("lớn hơn 2");
}else{
    console.log("nhỏ hơn 2");
}

switch (a){
    case 2:
        console.log("bằng 2");
    break;
    case 3:
        console.log("bằng 3");
    break;
}