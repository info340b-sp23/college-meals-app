import React from "react";

function recipe(props){

    return(
        <div>
            <h1 class="rec">Veggie Quesadilla</h1>
            <p class="time">Prep Time: 5 mins, Cook Time: 2 mins</p>
            <header class="rec">
                <img class="ques" src="img/veggie-quesadilla.jpeg" alt="veggie-ques"></img>
            </header>
            <section>
                <div class="ing">
                    <h2>Ingredients</h2>
                    <ul>
                        <li>Tortilla</li>
                        <li>Shredded Mexican-Blend Cheese</li>
                        <li>Bell Peppers</li>
                        <li>Onions</li>
                        <li>Beans</li>
                        <li>Cooking Oil</li>
                    </ul>
                </div>

                <div class="prep">
                    <h2>Preparing the Quesadilla</h2>
                    <ol>
                        <li>Chop up the bell peppers and onions to your preferred quantity.</li>
                        <li>Oil your pan and saute the chopped bell peppers and onions until soft and browned.</li>
                        <li>Place Tortilla on warm pan. Heat up to desired level.</li>
                        <li>Cover the surface of the tortilla with shredded cheese.</li>
                        <li>Add sauteed vegetables on top of the layer of cheese.</li>
                        <li>Place another tortilla on top of the vegetables. Let sit for 30 seconds, or until cheese melts.</li>
                        <li>Flip entire quesadilla over to warm up the other tortilla.</li>
                        <li>Wait till slightly browned, and serve.</li>
                    </ol>

                </div>
            </section>
        </div>
    );
}

export { recipe };