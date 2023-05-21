import React, { useState, useEffect } from "react";
import { CostFilter } from "./CostFilter";

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
    }, [selectedOptions]);

    // const [selectedCost, setSelectedCost] = useState("");
    const handleCostChange = (cost) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            cost: cost,
        }));
    };

    return (
        <section className="RecipeFeed">
            <h2 className="recipe-feed">Recipe Feed</h2>
            <form>
                <div className="specification-sections">
                    <div className="cost-section">
                        <CostFilter selectedOptions={selectedOptions} onCostChange={handleCostChange} />
                    </div>
                    <div className="time-section">
                        {/* <TimeFilter /> */}
                    </div>
                    <div className="diet-section">
                        {/* <DietFilter /> */}
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
