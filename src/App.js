import React, { useState } from "react";
import { Nav } from "./Nav";
import { RecipeFeed } from "./RecipeFeed";
import recipeData from "./recipeData";

function App() {

    const [filteredRecipes, setFilteredRecipes] = useState(recipeData);

    function handleFilter(options) {
        const filteredRecipes = recipeData.filter(recipe => {
            return (
              (options.cost === "" || recipe.cost === options.cost) &&
              (options.time === "" || recipe.time === options.time) &&
              (options.diet === "" || recipe.diet === options.diet) &&
              (options.allergies.length === 0 || options.allergies.every(allergy => recipe.allergies.includes(allergy))) &&
              (options.nutrition === "" || recipe.nutrition === options.nutrition)
            );
        });
        setFilteredRecipes(filteredRecipes);
    }

    return (
        <div>
             <Nav />
             
             <RecipeFeed recipes={filteredRecipes} onFilter={handleFilter} />
                    
             <footer>
                <div className="container">
                    <p><a href="mailto:email@collegemeals.uw.edu"><span className="material-icons"></span> email@collegemeals.uw.edu</a></p>
                    <p><a href="tel:555-555-5555"><span className="material-icons">phone</span> 555-555-5555</a></p>
                    <p>&copy; INFO 340 Group 6, The Noun Project, iStock </p>
                </div>
             </footer>
        </div>
        
    );
}
export default App;