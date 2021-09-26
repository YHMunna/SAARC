import "./Country.css";
import React from "react";

const Country = (props) => {
  return (
    <div className="country-info">
      <h5>{props.country.Country}</h5>
      <img className="country-flag" src={props.country.img} alt="" />
    </div>
  );
};

export default Country;
