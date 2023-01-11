import React from "react";

const Landing = () => {
  const family = JSON.parse(localStorage.getItem("family"));
  return (
    <div className="w-full h-full bg-cover flex flex-col items-center text-3xl mt-10 gap-5">
      <div className="mr-5">
        Xin gửi lời chào đến gia đình {family.idSoHoKhau}
      </div>
      <div>Chủ hộ {family.tenChuHo}</div>
    </div>
  );
};

export default Landing;
