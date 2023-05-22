import React from "react";
import dietRestrictionData from "./DietaryRestrictionData";
import foodAllergiesData from "./FoodAllergiesData";

function ProfileSettings() {
  return (
    <section class="settings">
      <section class="settings-box">
        <div class="close-popup">
            <a href="profile.html">
              <p>+</p>
            </a>
        </div>
        <form>
          <h2>Dietary Restrictions</h2>
          <DietCheckboxes data={dietRestrictionData} breakLine={3}/>
          <h2>Food Allergies and Intolerance</h2>
          <DietCheckboxes data={foodAllergiesData} breakLine={4} />
          <br></br>
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

export { ProfileSettings };