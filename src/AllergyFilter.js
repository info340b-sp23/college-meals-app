import React from "react";

function AllergyFilter(props) {
    const handleAllergyChange = (event) => {
        const allergy = event.target.value;
        const isChecked = event.target.checked;


        if (isChecked) {
            props.onAllergyAdd(allergy);
        } else {
            props.onAllergyRemove(allergy);
        }
    };

    return (
        <div className="allergy-section">
            <label>Allergies:</label>
            <div className="form-group">
                <label htmlFor="gluten">
                    <input type="checkbox" className="gluten" id="gluten" name="gluten" value="gluten" onChange={handleAllergyChange} />
                Gluten </label>
            </div>
            <div className="form-group">
                <label htmlFor="dairy">
                    <input type="checkbox" className="dairy" id="dairy" name="dairy" value="dairy" onChange={handleAllergyChange} />
                Dairy</label>
            </div>
            <div className="form-group">
                <label htmlFor="nuts">
                    <input type="checkbox" className="nuts" id="nuts" name="nuts" value="nuts" onChange={handleAllergyChange}/>
                Nuts</label>
            </div>
        </div>
    );
}

export { AllergyFilter }