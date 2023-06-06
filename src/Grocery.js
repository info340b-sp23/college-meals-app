import React, {useState, useEffect} from 'react';
import * as d3 from 'd3';

import GROCERY_DATA from './Grocery-Prices.csv';

const groceryData = GROCERY_DATA;
function CSVResults(props) {
    const [results, setResults] = useState([]);
    useEffect(() => {
        fetch(groceryData)
            .then(response => response.text())
            .then(data => {
                const csvData = d3.csvParse(data);
                const row = csvData[0];
                const stores = Object.values(row);
                setResults(stores);
            })
            .catch(error =>{
                console.error('Error', error);
            });
    }, []);
        return (
            <div>
                <ul>
                    {results.map((value, index) =>(
                        <li key={index}>{value}</li>
                    ))}
                </ul>
            </div>
        );
};

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
                        <button className='btn' role="link" aria-label="visit H-Mart website" onClick={() => handleClick('https://www.hmart.com/')}>View more</button>
                    </div>

                    <div className="card">
                        <img src="img/target.png" alt="target logo" className="groc-img"></img>
                        <h2 className="groc">Target</h2>
                        <p className="small-txt">Within 1 Mile</p>
                        <p>Found Here: Eggs, Milk, Beans...</p>
                        <button className='btn' role="link" aria-label="visit Target website" onClick={() => handleClick('https://www.target.com/c/grocery/-/N-5xt1a')}>View more</button>
                    </div>

                    <div className="card">
                        <img src="img/trader-joes.png" alt="trader joes logo" className="groc-img"></img>
                        <h2 className="groc">Trader Joe's</h2>
                        <p className="small-txt">Within 1 Mile</p>
                        <p>Found Here: Eggs, Milk, Beans...</p>
                        <button className='btn' role="link" aria-label="visit Trader Joe's website" onClick={() => handleClick('https://www.traderjoes.com/home')}>View more</button>
                    </div>

                    <div className="card">
                        <img src="img/qfc-logo.jpg" alt="qfc logo" className="groc-img"></img>
                        <h2 className="groc">QFC</h2>
                        <p className="small-txt">Within 3 Miles</p>
                        <p>Found Here: Eggs, Milk, Beans...</p>
                        <button className='btn' role="link" aria-label="visit QFC website" onClick={() => handleClick('https://www.qfc.com/')}>View more</button>
                    </div>

                </div>
            </div>
            <h1 className='find-a-store'>All Store Options</h1>
            <CSVResults />
        </section>
    );
}   

export { Grocery };
