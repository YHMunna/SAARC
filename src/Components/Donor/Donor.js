import React from "react";
import "./Donor.css";
const Donor = (props) => {
  const { img, name, designation, Country, City, proposedFund } = props.member;
  //   console.log(props.member);
  return (
    <div className="donor-info">
      <img className="donor-img" src={img} alt="" />
      <h4>Ruler: {name}</h4>
      <h5>Role: {designation}</h5>
      <h6>Country: {Country}</h6>
      <h6>City: {City}</h6>
      <h6>Donate: $ {proposedFund}</h6>
      <button className="donate-btn">Donate</button>
    </div>
  );
};

export default Donor;
