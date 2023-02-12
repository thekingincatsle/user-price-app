import React, { useState, useEffect } from "react";
import { getMessage } from "../service/ConfirmService";

const Inbox = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const idShk = JSON.parse(localStorage.getItem("family")).idSoHoKhau;
    getMessage(idShk).then((res) => setMessage(res.data));
  }, []);
  return (
    <div className="flex items-center justify-center text-xl px-10 py-10 font-bold">
      <div className=" w-3/4">
        {message ? message : "Hộp thư trống, vui lòng trở lại sau!"}
      </div>
    </div>
  );
};

export default Inbox;
