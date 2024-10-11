//ĐỒNG BỘ:chạy từ trên xuống dưới
const test=()=> {
    console.log("=====1====")
    console.log("=====2====")
    console.log("=====3====")
}
test()
// KQ:1 2 3


//BẤT ĐỒNG BỘ:ASYNC
const createIdProduct=()=> {
    setTimeout(()=>console.log("1"))
    console.log("2")
    console.log("3")
}
createIdProduct()

//PROMISE:lÀ 1 OBJECT ĐẠI DIỆN CHO BIẾT MỘT HÀNH ĐỘNG
// BẤT ĐỒNG BỘ THỰC HIỆN THÀNH CÔNG HAY THẤT BẠI
/**Promise có 3 status:
 * new Promise(executor)
 * + Gọi api chưa biết request này thành công hay ko
 * - state:Pending
 * result:undefined(chưa biết kết quả)
 * + Gọi api thành công
 * - state:Fullfilled
 * result:value
 * + Gọi api thất bại
 * - state:rejected
 * result:error
 * 
 */
// Tạo một Promise
const myPromise=new Promise((resolve, reject) => {
    // Giả sử là thành công
    let isFlag=true
    if(isFlag){
        setTimeout(()=> {
            // Gọi resolve nếu thành công
            resolve("Thành công")
                },1000)
    } else {
        // Gọi reject nếu thất bại
        reject("Thất bại")
    }
  
})// Sử dụng Promise
myPromise
.then((data)=>{console.log(data)})
.catch((err)=> {console.log(err)})


const fetchData=new Promise((resolve, reject) => {
    const isSuccess=true
    if(isSuccess){
        const dataMessage={ message: "Data fetched successfully!"}

        setTimeout(()=> {
            resolve(dataMessage)
        ,1000})
    }
    else {
        reject("Error fetching data!")
    }
    
})
fetchData
.then((res)=> {console.log(res.message)})
.catch((err)=> {console.log(err)})


//ASYNC/AWAIT:GIỐNG PROMISE NHƯNG GIÚP CODE TỪ 
//BẤT ĐỒNG BỘ CHẠY THEO ĐỒNG BỘ
//trước mỗi promise có await
// promise 1 đầu tiên chạy xong thì promise 2 mới đc chạy
const executeAsync=async (params) => {
    try {
        const promise1=await myPromise
    console.log("---promise 1",promise1)
    const promise2=await fetchData
    console.log("----promise 2",promise2)
    } catch (error) {
        console.log(error)
    }
    
}
executeAsync()


