//1.Lấy 1 số phần tử cần thiết
// import { myVar } from "./named.js";
// console.log(myVar);

//2.Hoặc chỉ lấy 1 số phần tử cần thiết
// import { myFunction,myVar } from "./named.js";
// console.log(myVar);
// myFunction();

//3.Hoặc lấy tất cả
// import * as name from "./named.js"
// console.log(name.myVar);
// name.myFunction();
// console.log(name.df2); undefined

// import df2,{myFunction,myVar} from "./named.js";
// console.log(df2);

//4.Import default
// import df from "./default.js"
// console.log(df);

// import total from "./default.js";
// console.log(total(9,1));
//Đổi tên khi import
//5.1 import default : đặt tên tuỳ ý
// import tuyY from "./default.js"
// console.log(tuyY(8,5));
//5.2 import named: đặt tên với as
// import { myVar as tenMoi } from "./named.js";
// console.log(tenMoi);

//      Giả sử có 1 đối tượng đơn hàng
// const donHang={
//     maDonHang: 101,
//     tienTe: "VND",
//     tongTien :50000,
// };

//       Không sử dụng destructuring
// function xuLyDonHang(donHang){
//     const maDonHang =donHang.maDonHang;
//     const tienTe=donHang.tienTe;
//     const tongTien =donHang.tongTien;
    
//     console.log(`Ma don hang: ${maDonHang}`);
//     console.log(`Tien te: ${tienTe}`);
//     console.log(`Tong tien: ${tongTien}`);
// }
// xuLyDonHang(donHang);

// //Sử dụng destructuring
// function xuLyDonHang2({maDonHang,tienTe,tongTien}){
//     console.log(`Ma don hang: ${maDonHang}`);
//     console.log(`Tien te: ${tienTe}`);
//     console.log(`Tong tien: ${tongTien}`);
// }
// xuLyDonHang2(donHang);

//      Sử dụng destructuring với giá trị mặc định
// function xuLyDonHang2({maDonHang=0,tienTe='VND',tongTien=0}){
//     console.log(`Ma don hang: ${maDonHang}`);
//     console.log(`Tien te: ${tienTe}`);
//     console.log(`Tong tien: ${tongTien}`);
// }
// xuLyDonHang2({maDonHang: 102});

//      Sử dụng Rest parameter
// function xuLyDonHang({maDonHang,...rest}){
//     console.log(`Ma don hang: ${maDonHang}`);
//     console.log(rest);
// }
// xuLyDonHang({
//     maDonHang:103,
//     tienTe:"usd",
//     tongTien:2000,
//     khachHang:'Nguyen Van Huy',
// });
// 1.Spread operator với mảng
// Danh sách sở thích hiện tại
let soThich = ['doc sach','nghe nhac'];
//sở thích muốn thêm
const soThichMoi =['di du lich'];
//cập nhập danh sách sở thích
soThich=[...soThich,'abc',...soThichMoi];
console.log('Danh sach so thich sau khi them: ',soThich);
//Spread operator với object
let user = {
    id:1,
    name:'Nguyen Van Huy',
    email:'huynv@gmail.com',
};
//thông tin cập nhật
const updates ={
    address:'123 duong Nguyen Van Cu',
    role:'admin',
};
//cập nhật thông tin người dùng
user ={...user,...updates};
console.log('Danh sach sau khi cap nhat: ',user);
