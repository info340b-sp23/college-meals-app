import React from "react";

function NutritionFilter(props) {
  const handleNutritionChange = (event) => {
    props.onNutritionChange(event.target.value);
  };

  return (
    <div className="form-group">
      <label htmlFor="nutrition">Nutrition:</label>
      <div>
        <label htmlFor="high-protein">
          <input
            type="radio"
            className="high-protein"
            id="high-protein"
            name="nutrition"
            value="high-protein"
            onChange={handleNutritionChange}
          />
          High protein
        </label>
      </div>
      <div>
        <label htmlFor="low-carb">
          <input
            type="radio"
            className="low-carb"
            id="low-carb"
            name="nutrition"
            value="low-carb"
            onChange={handleNutritionChange}
          />
          Low carb
        </label>
      </div>
      <div>
        <label htmlFor="low-fat">
          <input
            type="radio"
            className="low-fat"
            id="low-fat"
            name="nutrition"
            value="low-fat"
            onChange={handleNutritionChange}
          />
          Low fat
        </label>
      </div>
    </div>
  );
}

export { NutritionFilter };
