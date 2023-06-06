import React from "react";

function DietFilter(props) {
    const handleDietChange = (event) => {
        props.onDietChange(event.target.value);
    };

    return (
        <div className="form-group">
            <label htmlFor="diet">Dietary restrictions: </label>
            <select className="diet" id="diet" name="diet" value={props.selectedDiet} onChange={handleDietChange}>
                <option value="">Select dietary restrictions</option>
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="paleo">Paleo</option>
                <option value="gluten-free">Gluten-free</option>
            </select>
        </div>
    );
}

export { DietFilter };