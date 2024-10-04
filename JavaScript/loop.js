/** VÒNG LẶP -LOOP
*/

//~ 1. FOR- lặp với điều kiện đúng
// for ( var i=1;i<=100;i++ ) {
//    console.log(i)
// }

/** b1:tạo và gán biến i=1, chạy đúng 1 lần
 *  b2:xét đk? đoạn code {} chạy: dừng
 *  b3:tăng i++ rồi ktra đk, in ra i
 *  b4 chạy tương tự cho đến khi ko thõa đk
 */

// const myArray=[
//    "Javascript",
// "PHP",
// "C++",
// "Go",
// "Ruby",
// ]

// const arrayLength=myArray.length

// for (var i=0;i<arrayLength;i++) {
//    console.log(myArray[i])
// }

//~ * 2. FOR/IN- lặp qua key của đối tượng
// const myInfo={
//    name:"Trâm Anh",
//    age:18,
//    address:"Nha Trang"
// }

// for (var key in myInfo){
   // console.log(myInfo[key]) // Trâm Anh 18 Nha Trang
   // console.log(key) //name age address
// }
// có bao nhiêu key thì chạy mấy nhiêu lần

// const myLanguage=[
//    "Javascript",
//     "PHP",
//    "C++",
//    "Go",
//    "Ruby",
// ]
// for (var key in myLanguage){
   // console.log(key) // 0 1 2 3 4 
//    console.log(myLanguage[key])
// }
// const string='Hello World'
// for(var key in string){
//    console.log(string[key]) //H e l l o W o r l d
// }

//~ 3. FOR/OF - lặp qua value của đối tượng
// const myLanguage=[
//    "Javascript",
//     "PHP",
//    "C++",
//    "Go",
//    "Ruby",
   
// ]
// for(var value of myLanguage){
//    console.log(value) // Javascript PHP C++ Go Ruby
// }

// const string='Hello World'
// for(var value of string){
//    console.log(value) // H e l l o W o r l d
// }

// const myInfo={
//    name:"Trâm Anh",
//    age:18,
//    address:"Nha Trang"
// }
// console.log(Object.keys(myInfo)) //[ 'name', 'age', 'address' ]
// for (var value of Object.keys(myInfo) ) {
//    console.log(value) //name age address
// }

// console.log(Object.values(myInfo))
// for (var value of Object.values(myInfo) ) {
//    console.log(value) //name age address
// }


//~ * 4. WHILE -lặp khi điều kiện đúng
// let i=0
// while (i<10) {
//    i++
//    console.log(i)
// }

// const myLanguage=[
//    "Javascript",
//     "PHP",
//    "C++",
//    "Go",
//    "Ruby",
// ]
//  const arrayLength=myLanguage.length
//  let i=0
//  while (i<arrayLength) {
//    console.log(myLanguage[i])
//    i++
   /**Javascript
      PHP
      C++
      Go
      Ruby */
//  }

//  const arrayLength=myLanguage.length
//  let i=0
//  while (i<arrayLength) {
//    i++
//    console.log(myLanguage[i])
   /**PHP
C++
Go
Ruby
undefined */
//  }

//~5  DO/WHILE - lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
// let i=0
// do {
//    i++
//    console.log(i)
// } while (i<10);

/** BREAK- CONTINUE */
// for(var i=0;i<10;i++){
//    console.log(i)
//    if(i>=5){
//       break // 012345
//    }
// }

// for(var i=0;i<10;i++){
//    if(i%2==0){
//      continue // 13579
//    }
//    console.log(i)
// }

// *CONTINUE:khi thỏa 1 đk thì nó sẽ loại bỏ mấy cái thỏa đk đó,return về cái ko thỏa đk
//* BREAK: khi thỏa 1 đk nào đó thì nó dừng lại ngay


// VÒNG LẶP LỒNG NHAU
// const array=[
//    [1,2],
//    [3,4],
//    [5,6]
// ]
// const value=array.length

// for (var i=0;i<value;i++){
//    const valueNext=array[i].length // array[0]: [1,2]
//    for(var j=0;j<valueNext;j++){
//       console.log(array[i][j]) // array[0][0]:1
//    }
// }
/**b1. vòng lặp đầu tiên hiện ra
 * b2.truy xuất vào các phần tử của mảng bằng vòng lặp thứ 2 */

//! VÍ DỤ VỀ LOOP
// BÀI 1:
// for (var i=10;i>0;i--){
//    console.log(i)
// }

// BÀI 2:
// for(var i=0;i<20;i+=5){
//    console.log(i) // 0 5 10 15
// }

// BÀI 3:
// for(var i=20;i>=0;i-=5){
//    console.log(i) // 20 15 10 5 0
// }