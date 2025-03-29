import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to WiseWords</h1>
            <p>Discover the wisdom of the ages.</p>
            <p>Click the button below to get a random Advice.</p>
            <Link to="/random">
                <button className="random-button">Get Random Advice</button>
            </Link>
        </div>
    );
}

export default Home;