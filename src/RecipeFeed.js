import React, { useState, useEffect, useCallback } from "react";
import { CostFilter } from "./CostFilter";
import { TimeFilter } from "./TimeFilter";
import { DietFilter } from "./DietFilter";
import { AllergyFilter } from "./AllergyFilter";
import { NutritionFilter } from "./NutritionFilter";
import { RecipeCard } from "./RecipeCard";

function RecipeFeed(props) {
  const recipes = props.recipes;
  const onFilter = useCallback(props.onFilter, []);

  const [selectedOptions, setSelectedOptions] = useState({
    cost: "",
    time: "",
    diet: "",
    allergies: [],
    nutrition: ""
  });

  useEffect(() => {
    onFilter(selectedOptions);
  }, [onFilter, selectedOptions]);


  const handleCostChange = (cost) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      cost: cost,
    }));
  };

  const handleTimeChange = (time) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      time: time,
    }));
  };

  const handleDietChange = (diet) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      diet: diet,
    }));
  };

  const handleAllergyAdd = (allergy) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      allergies: [...prevOptions.allergies, allergy],
    }));
  };

  const handleAllergyRemove = (allergy) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      allergies: prevOptions.allergies.filter((a) => a !== allergy),
    }));
  };

  const handleNutritionChange = (nutrition) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      nutrition: nutrition,
    }));
  };
  
  const recipeCards = recipes.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <section className="RecipeFeed">
      <h2 className="recipe-feed">Recipe Feed</h2>
      
      <form className="filters">
        <div className="filter-group">
          <CostFilter
            selectedCost={selectedOptions.cost}
            onCostChange={handleCostChange}
          />
        </div>
        <div className="filter-group">
          <TimeFilter onTimeChange={handleTimeChange} />
        </div>
        <div className="filter-group">
          <DietFilter onDietChange={handleDietChange} />
        </div>
        <div className="filter-group">
          <AllergyFilter
            allergies={selectedOptions.allergies}
            onAllergyAdd={handleAllergyAdd}
            onAllergyRemove={handleAllergyRemove}
          />
        </div>
        <div className="filter-group">
          <NutritionFilter onNutritionChange={handleNutritionChange} />
        </div>
      </form>
      <div className="recipe-list">{recipeCards}</div>
    </section>
  );
}

export { RecipeFeed };
