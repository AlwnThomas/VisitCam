import React from 'react';

const Travel = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '75vw', margin: '0 auto' }}>
      <h1>Getting Around Cambridge</h1>
      <p style={{ marginBottom: '1.5rem' }}>
        Whether you're arriving by train, bike, or just getting lost on purpose, here's how to find your way around Cambridge.
      </p>

      <section style={{ marginBottom: '2rem' }}>
        <h2>🚆 Trains</h2>
        <p>
          Cambridge Station connects you to London, Stansted Airport, and beyond. Frequent services make it a breeze to plan your trip.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>🚌 Buses</h2>
        <p>
          Local buses run throughout the city and nearby villages. Don’t forget to check out Park & Ride options — easier than trying to park in town!
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>🚲 Cycling</h2>
        <p>
          Welcome to the UK's cycling capital. You’ll see more bikes than cars — rent one and join the flow!
        </p>
      </section>

      <section>
        <h2>🅿️ Parking</h2>
        <p>
          Parking in central Cambridge is limited — plan ahead. Use Park & Ride or public car parks to avoid the stress.
        </p>
      </section>
    </div>
  );
};

export default Travel;