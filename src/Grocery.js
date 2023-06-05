import React from 'react';

function Grocery(props) {

    const handleClick = (event) => {
        window.open(event, '_blank', 'noreferrer');
        };

    return (
        <section className ="grocery">
            <h1 className="find-store">Find a Store</h1>
            <div className="flex-container">
                <div className="flex-cards">
                    <div className="card">
                        <img src="img/hmart-logo.jpg" alt="hmart logo" className="groc-img"></img>
                        <h2 className="groc">H-Mart</h2>
                        <p className="small-txt">Within 1 Mile</p>
                        <p>Found Here: Eggs, Milk, Beans...</p>
                        <button role="link" aria-label="visit H-Mart website" onClick={() => handleClick('https://www.hmart.com/')}>(Click to see more)</button>
                    </div>

                    <div className="card">
                        <img src="img/target.png" alt="target logo" className="groc-img"></img>
                        <h2 className="groc">Target</h2>
                        <p className="small-txt">Within 1 Mile</p>
                        <p>Found Here: Eggs, Milk, Beans...</p>
                        <button role="link" aria-label="visit Target website" onClick={() => handleClick('https://www.target.com/c/grocery/-/N-5xt1a')}>(Click to see more)</button>
                    </div>

                    <div className="card">
                        <img src="img/trader-joes.png" alt="trader joes logo" className="groc-img"></img>
                        <h2 className="groc">Trader Joe's</h2>
                        <p className="small-txt">Within 1 Mile</p>
                        <p>Found Here: Eggs, Milk, Beans...</p>
                        <button role="link" aria-label="visit Trader Joe's website" onClick={() => handleClick('https://www.traderjoes.com/home')}>(Click to see more)</button>
                    </div>

                    <div className="card">
                        <img src="img/qfc-logo.jpg" alt="qfc logo" className="groc-img"></img>
                        <h2 className="groc">QFC</h2>
                        <p className="small-txt">Within 3 Miles</p>
                        <p>Found Here: Eggs, Milk, Beans...</p>
                        <button role="link" aria-label="visit QFC website" onClick={() => handleClick('https://www.qfc.com/')}>(Click to see more)</button>
                    </div>

                </div>
            </div>
        </section>
    );
}   

export { Grocery };
