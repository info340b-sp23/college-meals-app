import React, { useState } from "react";
import {Routes, Route, Link} from 'react-router-dom';
import { Nav } from "./Nav";
import { RecipeFeed } from "./RecipeFeed";
import recipeData from "./recipeData";
import {Grocery} from "./Grocery.js";
import {Recipe} from "./Recipe.js";
import { Profile } from "./Profile";
import RankList from "./RankList";

function App() {

    const [filteredRecipes, setFilteredRecipes] = useState(recipeData);

    function handleFilter(options) {
        setFilteredRecipes(prevRecipes => {
          return recipeData.filter(recipe => {
            return (
              (options.cost === "" || recipe.cost === options.cost) &&
              (options.time === "" || recipe.time === options.time) &&
              (options.diet === "" || recipe.diet === options.diet) &&
              (options.allergies.length === 0 || options.allergies.every(allergy => recipe.allergies.includes(allergy))) &&
              (options.nutrition === "" || recipe.nutrition === options.nutrition)
            );
          });
        });
      }

    return (
        <div>
            <Nav />
            <Routes>
                <Route path='*' element={<RecipeFeed recipes={filteredRecipes} onFilter={handleFilter} />} />
            
                <Route path='/veggiequesadilla' element={<Recipe />}/>

                <Route path='/grocery.html' element={<Grocery />} />

                <Route path='/profile.html' element={<Profile />} />

                <Route path='/ranklist' element={<RankList />} />
            </Routes>

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