//Cách 1:Khai báo hàm, biến, class rồi export
//  const myVar = 10;
//  function myFunction(){
//     console.log("Xin chao !");
//  }
//  export{myVar,myFunction};
//Cach 2: Export tai noi khai bao
export const myVar = 200;
export function myFunction(){
   console.log("Xin chao cac ban");

}
//file co 1 exportt default
let df2 = "Day la bien default 2 trong named.js";
export default df2;