// /src/pages/Eat.tsx

import React from 'react';
import '../pages/Eat.css';

const Eat = () => {
  return (
    <div className="main">
      <h1>Bites, brunches & the best in town</h1>
      <p>Discover the best food spots recommended by locals</p>

      <div className="eat-links">
        <a href="#indian"><img src="/assets/indian.png" alt="Indian" /><p>Indian</p></a>
        <a href="#pubs"><img src="/assets/pubs.png" alt="Pubs" /><p>Pubs</p></a>
        <a href="#chinese"><img src="/assets/chinese.png" alt="Chinese" /><p>Chinese</p></a>
        <a href="#fast"><img src="/assets/fastFood.png" alt="Fast Food" /><p>Fast Food</p></a>
        <a href="#pizza"><img src="/assets/pizza.png" alt="Pizza" /><p>Pizza</p></a>
        <a href="#coffee"><img src="/assets/coffee.png" alt="Cafe" /><p>Cafe</p></a>
      </div>

      {/* Dummy anchors — you'll replace with real content later */}
      <div id="breakfast"><h2>🥐 Breakfast Spots</h2></div>
      <div id="lunch"><h2>🥗 Lunch Ideas</h2></div>
      <div id="dinner"><h2>🍝 Dinner Places</h2></div>
      <div id="coffee"><h2>☕ Coffee Stops</h2></div>
      <div id="dessert"><h2>🍰 Sweet Treats</h2></div>
      <div id="pubs"><h2>🍻 Pubs & Bars</h2></div>

    </div>
  );
};

export default Eat;
