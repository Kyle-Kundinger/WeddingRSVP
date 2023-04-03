import React from "react";

function FoodChoice({onChange}) {
    const handleFoodChange = (e) => {
        onChange(e);
    }
  return (
    <div style={{ margin: "10px" }}>
      <label>
        Select your food choice:
      </label>
      <select name="foodChoice" onChange={handleFoodChange} style={{ marginLeft: "10px" }}>
        <option value="none">None</option>
        <option value="chicken">Chicken</option>
        <option value="beef">Beef</option>
        <option value="fish">Fish</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="other">Other</option>
      </select>
      <br />
      <br />
    </div>
  );
}

export default FoodChoice;
