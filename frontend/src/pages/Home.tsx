import React from 'react';

const Home = () => {
    return(
        <div>
            <header className="hero">
                <h1>Welcome to Cambridge!</h1>
                <p>Your Cam Visiting Guide</p>
            </header>

            <section className="cards">
                <div className="card">
                    <h2>Restaurants</h2>
                    <p>Best places to eat</p>
                </div>

                <div className="card">
                    <h2>Hidden Gems</h2>
                    <p>Off-the-beaten spots</p>
                </div>

                <div className="card">
                    <h2>Transport</h2>
                    <p>Find your way around</p>
                </div>
            </section>

            <footer>
                <p>© VisitCam 2025</p>
            </footer>
        </div>
    );
};

export default Home;