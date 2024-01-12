let a = +prompt("nhap diem toan");
let b = +prompt("nhap diem van");
let c = +prompt("nhap diem anh");
let tb = (a+b+c)/3;
if(tb>=8 && tb <=10 ){
    console.log("gioi");
}else if(tb>=6.5 && tb <=7.9 ){
    console.log("gioi");
}else if(tb>=5 && tb <=6.4 ){
    console.log("trung binh");
}else if(tb <5 ){
    console.log("yeu");
}