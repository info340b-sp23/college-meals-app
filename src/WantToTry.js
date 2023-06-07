import React from "react";
import { Link } from "react-router-dom";
import wanttotrydata from "./wantToTryData";

function WantToTry() {
  return (
    <section className="rank-container">
        <div className="rank-content">
          <h1>Lists</h1>
          <div className="list-selector">
            <h2><Link to="/rankList">Been</Link></h2>
            <h2 className="underlined"><Link to="/wantToTryList">Want To Try</Link></h2>
          </div>
          <hr></hr>
          <RankFoodCard data={wanttotrydata}/>

        </div>
      </section>
  );
}

function RankFoodCard({ data }) {
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
          <p className="rank-rating"></p>
      </a>
      <hr></hr>
    </React.Fragment>
  ));
}

export default WantToTry;