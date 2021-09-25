import React, { useEffect, useState } from "react";
import Donor from "../Donor/Donor";
import "./Members.css";

const Members = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("./info.JSON")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <div className="member-container">
      <div className="donor-container">
        {members.map((member) => (
          <Donor key={member.memberID} member={member}></Donor>
        ))}
      </div>
      <div className="donation-fund">
        <h2>tui choto </h2>
      </div>
    </div>
  );
};

export default Members;
