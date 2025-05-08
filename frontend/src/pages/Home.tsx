import React, { useState } from 'react';
import '../pages/Home.css';

const Home = () => {
    const [showFullText, setShowFullText] = useState(false);
    const toggleReadMore = () => setShowFullText(!showFullText);

    return(
        <div>
            <header className="hero">

                <div className="hero-wrapper">
                <img src="/assets/VisitCam.png" alt="cam city view" className="hero-image" />
                <div className="desc">
                <h4>Welcome to</h4>
                <h2>Cambridge</h2>
                <p className={`desc-text ${showFullText ? 'expanded' : 'clamped'}`}>
                    Cambridge isn’t just about clever minds and pointy buildings
                    — though we do have 31 colleges full of both. From punting on
                    the River Cam like a Victorian poet, to stumbling upon centuries-old
                    pubs where Newton probably spilled an ale, this city is a charming
                    collision of heritage and modern life. Whether you're here for the
                    Gothic arches or just a really good sandwich by the river, Cambridge
                    always delivers — with class, cobblestones, and a little nerdy magic.
                </p>

                <button className="read-more-btn" onClick={toggleReadMore}>
                    {showFullText ? 'Read less ▲' : 'Read more ▼'}
                </button>

                </div>
                </div>

            </header>

            <section className="cards">
                <div className="card">
                <img src="/assets/topEatsCard.png" alt="Top Eats" className="card-icon" />
                <div className="card-content">
                    <h2>Top Eats</h2>
                    <p>handpicked eats</p>
                </div>
                </div>

                <div className="card">
                <img src="/assets/hiddenGemsCard.png" alt="Hidden Gems" className="card-icon" />
                <div className="card-content">
                    <h2>Hidden Gems</h2>
                    <p>off-the-beat spots</p>
                </div>
                </div>

                <div className="card">
                <img src="/assets/freebiesCard.png" alt="Freebies" className="card-icon" />
                <div className="card-content">
                    <h2>Perks & Passes</h2>
                    <p>freebies & local perks</p>
                </div>
                </div>
            </section>

            <footer>
                <p>© VisitCam 2025</p>
            </footer>
        </div>
    );
};

export default Home;