//ĐỒNG BỘ:chạy từ trên xuống dưới
const test=()=> {
    console.log("=====1====")
    console.log("=====2====")
    console.log("=====3====")
}
test()
// KQ:1 2 3


//BẤT ĐỒNG BỘ:ASYNC: thực hiện 1 lúc nhiều tác vụ 
const createIdProduct=()=> {
    setTimeout(()=>console.log("1"),0)
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


//ASYNC/AWAIT:return về một promise 
//BIẾN BẤT ĐỒNG BỘ CHẠY THEO ĐỒNG BỘ
//? + LÀM CV 1 TRƯỚC=> SAU KHI XONG TIẾP TỤC CV 2=> NẾU CÓ LỖI,BÁO LỖI
const handleRun= async()=>{
    try {
       const res=await handleAdd(5,3)
       console.log("KET QUA CONG",res) 
       const nextRes= await handleMinus(5,3)
       console.log("KET QUA TRU",nextRes)
    } catch (error) {
        console.log("Lỗi",error)
    }
}
const handleAdd=(a,b)=> {
return new Promise((resolve, reject) => {
 setTimeout(()=> {
    resolve(a+b)
 },1000)
})
}
const handleMinus=(a,b)=> {
return new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(a-b)
    },1000)
})
}
handleRun()
handleAdd()
handleMinus()

