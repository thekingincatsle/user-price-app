import React, { useEffect, useState } from "react";
import MemberCard from "../components/MemberCard";
import { getMembersByIdShk } from "../service/MemberService";

const Members = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const idShk = JSON.parse(localStorage.getItem("family")).idSoHoKhau;
    getMembersByIdShk(idShk).then((res) => setMembers(res.data));
  }, []);
  return (
    <div className="w-2/3 flex flex-col gap-10">
      {members.map((member) => (
        <MemberCard member={member} />
      ))}
    </div>
  );
};

export default Members;
