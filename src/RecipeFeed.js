import React, { useState, useEffect } from "react";
import { CostFilter } from "./CostFilter";
import { TimeFilter } from "./TimeFilter";
import { DietFilter } from "./DietFilter";

function RecipeFeed(props) {
    const recipes = props.recipes;
    const onFilter = props.onFilter;
    const [selectedOptions, setSelectedOptions] = useState({
        cost: "",
        time: "",
        diet: "",
        allergies: [],
        nutrition: ""
    });

    useEffect(() => {
        onFilter(selectedOptions);
    }, [selectedOptions, selectedOptions.time]);

    // const [selectedCost, setSelectedCost] = useState("");
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
    }

    return (
        <section className="RecipeFeed">
            <h2 className="recipe-feed">Recipe Feed</h2>
            <form>
                <div className="specification-sections">
                    <div className="cost-section">
                        <CostFilter selectedCost={selectedOptions.cost} onCostChange={handleCostChange} />
                    </div>
                    <div className="time-section">
                        <TimeFilter onTimeChange={handleTimeChange}/>
                    </div>
                    <div className="diet-section">
                        <DietFilter selectedDiet={selectedOptions.diet} onDietChange={handleDietChange}/>
                    </div>
                    <div className="allergy-section">
                        {/* AllergyFilter */}
                    </div>
                    <div className="nutrition-section">
                        {/* NutritionFilter */}
                    </div>

                    <div className="container">
                        <div className="row">
                            {/* {recipes.map(recipe => (
                                <RecipeCard key={recipe.id} recipe={recipe} />
                            ))} */}
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}

export { RecipeFeed };
