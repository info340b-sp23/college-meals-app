import React from "react";

function CostFilter(props) {

    const handleCostChange = (event) => {
        props.onCostChange(event.target.value);
    };

    return(
        <div className="form-group">
            <label htmlFor="cost">Cost: </label>
            <select className="cost" id="cost" name="cost" value={props.selectedCost} onChange={handleCostChange}>
                <option value="">Select cost</option>
                <option value="$">Less than $10</option> 
                <option value="$$">Between $10 and $20</option>
                <option value="$$$">More than $20</option>
            </select>
        </div>
    );
}

export { CostFilter };