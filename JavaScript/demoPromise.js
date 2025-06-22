// Hàm giả lập gửi user lên server, mất 1 giây để hoàn thành
const addUserToSystem = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`User ${user.name} đã được thêm vào hệ thống`);
      resolve(user); // trả về user đã thêm
    }, 1000);
  });
};

// Hàm giả lập gửi mail chào mừng, mất 0.5 giây để hoàn thành
const sendWelcomeMail = (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Đã gửi mail chào mừng tới ${email}`);
      resolve();
    }, 500);
  });
};

// Hàm async sử dụng async/await để chạy tuần tự 2 bước trên
const handleAddUser = async (user) => {
  try {
    const addedUser = await addUserToSystem(user);
    await sendWelcomeMail(addedUser.email);
    console.log("Quá trình thêm user và gửi mail hoàn tất");
  } catch (error) {
    console.error("Lỗi xảy ra:", error);
  }
};

// Thử chạy
const newUser = { name: "Nguyen Van A", email: "a@example.com" };
handleAddUser(newUser);