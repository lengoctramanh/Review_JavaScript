/** CALLBACK 
 * 1. Là hàm con
 * 2. Được truyền như đối số của hàm cha
 * 3.Hàm cha thực hiện thành công thì hàm con đc gọi lại 
 * 4.Dùng để gọi api từ server/ các tác vụ ko đồng bộ(async)
 * 5.có thể thay thế tên callback bằng bất kỳ tên nào khác mà bạn muốn.
*/
// Định nghĩa hàm `doTask` và nhận hàm `callback` như tham số
const doTask=(callback)=> {
console.log("Làm bài tập")
callback()
}
// Định nghĩa một hàm callback 
const afterTask=()=> {
    console.log("Làm bài tập xong")
}
//Gọi hàm và truyền callback
doTask(afterTask)
// Định nghĩa hàm `doSomething` và nhận hàm `onComplete` như tham số
const doSomething=(onComplete)=> {
    console.log("Dang lm bt")
    onComplete()
}
// Định nghĩa một hàm callback 
const afterDone=()=> {
    console.log("hoan thanh")
}
// Gọi hàm `doSomething` và truyền `myCallback` vào
doSomething(afterDone)

//CALLBACK HELLL: mã có thể trở nên khó đọc và khó bảo trì.Không dùng
// Biện pháp: Promise/Async_Await
doSomething(function(result) {
    doSomethingElse(result, function(newResult) {
        doAnotherThing(newResult, function(finalResult) {
            console.log(finalResult);
        });
    });
});
