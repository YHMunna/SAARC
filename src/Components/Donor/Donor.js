import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faDonate } from "@fortawesome/free-solid-svg-icons";
import "./Donor.css";
const Donor = (props) => {
  const { img, name, designation, Country, City, proposedFund } = props.member;
  const donate = <FontAwesomeIcon icon={faDonate} />;
  // console.log(props);
  return (
    <div className="donor-info">
      <img className="donor-img" src={img} alt="" />
      <h4>Ruler: {name}</h4>
      <h5>Role: {designation}</h5>
      <h6>Country: {Country}</h6>
      <h6>City: {City}</h6>
      <h6>Donate: $ {proposedFund}</h6>
      <button
        onClick={() => props.handleAddToFund(props.member)}
        className="donate-btn"
      >
        {donate} Donate
      </button>
    </div>
  );
};

export default Donor;
