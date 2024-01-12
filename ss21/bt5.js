let month = +prompt("nhap thang trong nam 2023");
switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 ngay");
    break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 ngay");
    break;
    case 2:
        console.log("28 or 29 ngay");
    break;
   

}