import React from "react";
import recipeData from "./recipeData";

function RankList() {
  return (
    <section class="rank-container">
        <div class="rank-content">
          <h1>Lists</h1>
          <div class="list-selector">
            <h2 class="underlined"><a href="been-rank-list.html">Been</a></h2>
            <h2><a href="want-to-try-list.html">Want To Try</a></h2>
          </div>
          <hr></hr>
          <RankFoodCard data={recipeData}/>

        </div>
      </section>
  );
}

function RankFoodCard({ data }) {
  return data.map((entry) => (
    <React.Fragment key={entry.id}>
      <a href="recipe.html" class="rank-food">
        <img src={entry.img} alt={entry.alt} />
          <div class="food-description">
            <div class="rank-food-title">
              <h3>{entry.title}</h3>
              <img src={entry.dietImg} alt={entry.dietAlt} />
            </div>
            <h4>Total Time: {entry.time} minutes</h4>
            <h4>Cost: {entry.cost}</h4>
            <p>{entry.description}</p>
          </div>
        <p class="rank-rating">{entry.rank}</p>
      </a>
      <hr></hr>
    </React.Fragment>
  ));
}

export default RankList;