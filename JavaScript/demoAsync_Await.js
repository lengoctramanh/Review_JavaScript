//! FEATURES:ADD NEW USER INTO DATABASE, THEN SEND EMAIL TO CONGRATUALATE ATTENDING SUCCESFULLY
//* CÁC BƯỚC BẤT ĐỒNG BỘ:
//1. send data của user lên server(api hoặc db)
//2.sau khi thêm thành công,gửi mail
//* HÀM LẤY DS USER TỪ DUMMY API JSONPLACEHOLER
const getUserListFromAPI= async()=> {
    try {
        //!FETCH: gửi request http đến URL(https...) đểlấy data từ api hay server
        const respone=await fetch("https://jsonplaceholder.typicode.com/users")

        if (!respone.ok) {
            throw new Error(`Lỗi khi lấy dữ liệu:${respone.status}`)
        }

        const users=await respone.json()
        
        return users.map((user)=> ({
            name:user.name,
            email:user.email
        }))
    } catch (error) {
      console.error("===Lỗi===",error.message)
      return []//RETURN LỖI LÀ MẢNG RỖNG
    }
}
//* HIỂN THỊ DS USER 
const showUser=(user)=> {
console.log(`${user.name} -${user.email}`)
}
//* LẤY DS VÀ HIỂN THỊ TỪNG NGƯỜI 
const hanleShowUser= async()=> {
    const users=await getUserListFromAPI()
    console.log("===Danh sach users===")
    users.forEach(showUser)
}
hanleShowUser()
//* HÀM NHẬP THÔNG TIN TỪ BÀN PHÍM
const getUserInput=()=> {
    const name="abc"
    const email="sgdgngnnfsiug@gmail.com"
    return {
    name,
    email
}


}
//*HÀM GỬI NG DÙNG MỚI LÊN API
const addUserToSystem=async (userData)=> {
try {
     //!FETCH: gửi request http đến URL(https...) đểlấy data từ api hay server
        const respone=await fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            headers:{
                 "Content-Type": "application/json",
            },
            body:JSON.stringify(userData)
        })

        if (!respone.ok) {
            throw new Error("KHong the them ng dung vao he thong")
        }

        const newUser=await respone.json()
        console.log("Ng dung moi duoc them",newUser)
        return newUser
        
        
    
} catch (error) {
    console.error("Lỗi khi them ng dung",error.message)
    return null
}
}
//*HÀM GỬI EMAIL CHÀO MỪNG
const sendWelcomeMail=(email)=> {
console.log(`Đã gửi mail chào mừng ${email} `)
}

//*HÀM CHA
const handleShowAll=async()=> {
const newUser=getUserInput()
if (!newUser.name || newUser.email) {
    console.log('Thong tin ng dung chưa đủ')
    return
}
const addUser=await addUserToSystem(newUser)
if (addUser) {
    await hanleShowUser()
    sendWelcomeMail(addUser.email)
}
}
handleShowAll()