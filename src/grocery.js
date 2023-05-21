import React from 'react';

function SeeMore(props) {

    const handleClick = (event) => {
        window.open(event, '_blank', 'noreferrer');
        };

    return (
        <section className ="grocery">
            <h1 class="find-store">Find a Store</h1>
            <div class="flex-container">
                <div class="flex-cards">
                    <div class="card">
                        <img src="img/hmart-logo.jpg" alt="hmart logo" class="groc-img"></img>
                        <h2 class="groc">H-Mart</h2>
                        <p class="small-txt">Within 1 Mile</p>
                        <p>Found Here: Eggs, Milk, Beans...</p>
                        <button role="link" onClick={() => handleClick('https://www.hmart.com/')}>(Click to see more)</button>
                    </div>

                    <div class="card">
                        <img src="img/target.png" alt="target logo" class="groc-img"></img>
                        <h2 class="groc">Target</h2>
                        <p class="small-txt">Within 1 Mile</p>
                        <p>Found Here: Eggs, Milk, Beans...</p>
                        <button role="link" onClick={() => handleClick('https://www.target.com/c/grocery/-/N-5xt1a')}>(Click to see more)</button>
                    </div>

                    <div class="card">
                        <img src="img/trader-joes.png" alt="trader joes logo" class="groc-img"></img>
                        <h2 class="groc">Trader Joe's</h2>
                        <p class="small-txt">Within 1 Mile</p>
                        <p>Found Here: Eggs, Milk, Beans...</p>
                        <button role="link" onClick={() => handleClick('https://www.traderjoes.com/home')}>(Click to see more)</button>
                    </div>

                    <div class="card">
                        <img src="img/qfc-logo.jpg" alt="qfc logo" class="groc-img"></img>
                        <h2 class="groc">QFC</h2>
                        <p class="small-txt">Within 3 Miles</p>
                        <p>Found Here: Eggs, Milk, Beans...</p>
                        <button role="link" onClick={() => handleClick('https://www.qfc.com/')}>(Click to see more)</button>
                    </div>

                </div>
            </div>
        </section>
    );
}   

export { SeeMore };