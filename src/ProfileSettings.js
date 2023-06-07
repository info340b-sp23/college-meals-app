import React from "react";
import dietRestrictionData from "./DietaryRestrictionData";
import foodAllergiesData from "./FoodAllergiesData";
import { Link } from "react-router-dom";

function ProfileSettings() {
  return (
    <section className="settings">
      <section className="settings-box">
        <div clasName="close-popup">
            <a href="profile.html">
              <Link to="/profilePage"><p>+</p></Link>
            </a>
        </div>
        <form>
          <h2>Dietary Restrictions</h2>
          <DietCheckboxes data={dietRestrictionData} breakLine={3}/>
          <h2>Food Allergies and Intolerance</h2>
          <DietCheckboxes data={foodAllergiesData} breakLine={4} />
          <input type="reset"/>
        </form>
      </section>
    </section>
  );
}

function DietCheckboxes({ data, breakLine }) {
  return data.map((entry) => (
    <React.Fragment key={entry.id}>
      <input
        type="checkbox"
        id={entry.name}
        value={entry.capName}
      />
      <label htmlFor={entry.name}>{entry.capName}</label>
      <img src={entry.img} alt={entry.alt}/>
      {entry.id % breakLine === 0 && <br />}
    </React.Fragment>
  ));
}

export default ProfileSettings;