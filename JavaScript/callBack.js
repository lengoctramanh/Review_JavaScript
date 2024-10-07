/** CALLBACK 
 * 1. Là hàm con
 * 2. Được truyền như đối số của hàm cha
 * 3.Hàm cha thực hiện thành công thì hàm con đc gọi lại 
 * 4.Dùng để gọi api từ server/ các tác vụ ko đồng bộ(async)
*/

const doTask=(callback)=> {
console.log("Làm bài tập")
callback()
}

const afterTask=()=> {
    console.log("Làm bài tập xong")
}
doTask(afterTask)