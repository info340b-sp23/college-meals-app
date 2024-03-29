import React from "react";
import recipeData from "./recipeData";
import { Link } from "react-router-dom";

function RankList() {
  return (
    <section className="rank-container">
        <div className="rank-content">
          <h1>Lists</h1>
          <div className="list-selector">
            <h2 className="underlined"><Link to="/rankList">Been</Link></h2>
            <h2><Link to="/wantToTryList">Want To Try</Link></h2>
          </div>
          <hr></hr>
          <RankFoodCard data={recipeData}/>

        </div>
      </section>
  );
}

function RankFoodCard({ data }) {
  console.log(data);
  return data.map((entry) => (
    <React.Fragment key={entry.id}>
      <a href="recipe.html" className="rank-food">
        <img src={entry.img} alt={entry.alt} />
          <div className="food-description">
            <div className="rank-food-title">
              <h3>{entry.title}</h3>
              <img src={entry.dietImg} alt={entry.dietAlt} />
            </div>
            <h4>Total Time: {entry.time} minutes</h4>
            <h4>Cost: {entry.cost}</h4>
            <p>{entry.description}</p>
          </div>
        <p className="rank-rating">{entry.rank}</p>
      </a>
      <hr></hr>
    </React.Fragment>
  ));
}

export default RankList;