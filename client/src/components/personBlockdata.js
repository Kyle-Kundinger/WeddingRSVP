import React, { useState } from "react";
import FoodChoice from "./foodchoice";

function PersonBlockData({ name, personData, onChange }) {
  const [attending, setAttending] = useState(personData.attending ? "yes" : "no");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("attending")) {
      setAttending(value);
      onChange(personData._id, "attending", value === "yes");
    } else {
      onChange(personData._id, name, value);
    }

    console.log(personData._id);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Please Fill Out Your RSVP, {name}!
      </h2>
      <label style={{ margin: "10px" }}>
        {`Will you be attending the wedding (${personData.firstName})?`}
        <br />
        <input
          type="radio"
          name={`attending-${name}`}
          value="yes"
          onChange={handleChange}
          checked={attending === "yes"}
          style={{ marginRight: "10px" }}
        />{" "}
        Yes
        <input
          type="radio"
          name={`attending-${name}`}
          value="no"
          onChange={handleChange}
          checked={attending === "no"}
          style={{ marginLeft: "20px", marginRight: "10px" }}
        />{" "}
        No
      </label>
      <br />
      {attending === "yes" ? (
        <FoodChoice onChange={handleChange} />
      ) : null}
      
    </div>
  );
}

export default PersonBlockData;
