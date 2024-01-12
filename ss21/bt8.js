let height = +prompt("nhap chieu cao");
let weight = +prompt("nhap can nang");
let bmi = weight/(height**2);
if(bmi>=40){
    console.log("beo phi do III")
}else if(bmi>=35 && bmi<40){
    console.log("beo phi do II")
}else if(bmi>=30 && bmi<35){
    console.log("beo phi do I")
}else if(bmi>=25 && bmi<30){
    console.log("tien beo phi")
}else if(bmi>=18.5 && bmi<25){
    console.log("binh thuong")
}else if(bmi<18.5){
    console.log("gay")
}