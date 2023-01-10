import React from "react";

const MemberCard = ({ member }) => {
  return (
    <div className="bg-cyan-600 my-5 h-64 w-full flex px-5 py-5 rounded-xl justify-between items-center">
      <div className="w-25 h-25 bg-cyan-100 overflow-hidden rounded-xl">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSldqo623XS1rHVCKtxzm_hg-ex8AgEymTnDA&usqp=CAU"
          alt="avatar"
        />
      </div>
      <div className="bg-cyan-200 w-2/3 h-full rounded-xl flex flex-col justify-center gap-5 px-5">
        <div>
          <div className="text-sm"> Họ và tên</div>
          <div className="text-2xl">{member.ten}</div>
        </div>
        <div>
          <div className="text-sm"> Mã giấy khai sinh</div>
          <div className="text-2xl">{member.maGiayKhaiSinh}</div>
        </div>
        <div>
          <div className="text-sm">Năm sinh</div>
          <div className="text-2xl">{member.namSinh}</div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
