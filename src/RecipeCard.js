import React from "react";
import {Link} from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <div className="col-12 col-md-6">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">{recipe.title}</h3>
        </div>
        <img src={recipe.img} className="card-img-top" alt={recipe.imgAlt} />
        <div className="card-body">
          <p className="card-text">{recipe.description}</p>
        </div>
        <div className="card-footer">
          <span className="star-filled">&#9733;</span>
          <span className="star-filled">&#9733;</span>
          <span className="star-filled">&#9733;</span>
          <span className="star-filled">&#9733;</span>
          <span className="star">&#9733;</span>
          <small className="text-muted recipe-author">Posted by {recipe.author}</small>
          <Link to={recipe.title.replace(/\s/g, "")}>
            <button type="button" className="btn view-recipe" aria-label="View Recipe Details">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { RecipeCard };
