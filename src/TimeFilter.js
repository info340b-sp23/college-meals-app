import React from "react";

function TimeFilter(props) {
    const handleTimeChange = (event) => {
        props.onTimeChange(event.target.value);
    };

    return (
        <div className="form-group">
            <label htmlFor="time">Time: </label>
            <select className="time" id="time" name="time" onChange={handleTimeChange}>
                <option value="">Select time</option>
                <option value="15">Less than 15 minutes</option>
                <option value="30">Between 15 and 30 minutes</option>
                <option value="45">Between 30 and 45 minutes</option>
                <option value="60">More than 45 minutes</option>
            </select>
        </div>
    );
}

export { TimeFilter };