import React, { useEffect, useState } from "react";
import Donation from "../Donation/Donation";
import Donor from "../Donor/Donor";
import "./Members.css";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [donation, setDonation] = useState([]);

  useEffect(() => {
    fetch("./info.JSON")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  const handleAddToFund = (member) => {
    const newFund = [...donation, member];
    setDonation(newFund);
    // console.log(newFund);
  };
  return (
    <div className="member-container">
      <div className="donor-container">
        {members.map((member) => (
          <Donor
            key={member.memberID}
            member={member}
            handleAddToFund={handleAddToFund}
          ></Donor>
        ))}
      </div>
      <div>
        <Donation donation={donation}></Donation>
      </div>
    </div>
  );
};

export default Members;
