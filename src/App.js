import React from "react";
import { Nav } from "./Nav";

function App() {
    return (
        <div>
             <Nav />
             
             {/* <RecipeFeed /> */}
             <section className="RecipeFeed">
                <h2 className="recipe-feed">Recipe Feed</h2>
                <form>
                    <div className="specification-sections">
                        <div className="cost-section">
                            {/* <CostFilter /> */}
                        </div>
                        <div className="time-section">
                            {/* <TimeFilter /> */}
                        </div>
                        <div className="diet-section">
                            {/* <DietFilter */}
                        </div>
                        <div className="allergy-section">
                            {/* AllergyFilter */}
                        </div>
                        <div className="nutrition-section">
                            {/* NutritionFilter */}
                        </div>
                    </div>
                </form>

                <div className="container">
                    <div className="row">
                        {/* Post 1 */}
                        {/* <RecipeCard /> */}

                        {/* Post 2 */}
                        {/* <RecipeCard /> */}

                        {/* Post 3 */}
                        {/* <RecipeCard /> */}

                        {/* Post 4 */}
                        {/* <RecipeCard /> */}

                    </div>
                </div>
             </section>
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