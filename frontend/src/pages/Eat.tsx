import { useRef, useState, useEffect } from 'react';
import { stores } from '../data/stores.ts';
import type { Store } from '../data/stores.ts';
import '../pages/Eat.css';

// 🍽️ Main Eat Page
const Eat = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = el.querySelector('a')?.clientWidth || 120;
      const fullScroll = scrollAmount * 4;
      el.scrollBy({
        left: direction === 'left' ? -fullScroll : fullScroll,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', checkScroll);
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  // 🔧 Calculate distance between two lat/lng points
const getDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
  const toRad = (val: number) => (val * Math.PI) / 180;
  const R = 6371; // Earth radius in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

// 📍 Near You component (geolocation + closest 20)
const NearYou = () => {
  const [nearestStores, setNearestStores] = useState<Store[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const sorted = [...stores]
          .map(store => ({
            ...store,
            distance: getDistance(latitude, longitude, store.lat, store.lng)
          }))
          .sort((a, b) => a.distance - b.distance)
          .slice(0, 20);

        setNearestStores(sorted);
      },
      () => setError('Location access denied or unavailable.')
    );
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      {!error && nearestStores.length === 0 && <p>Loading nearby places...</p>}

      {/* Near You visual section */}
      <div className="nearby-scroll-container">
  <div className="nearby-cards" ref={scrollRef}>
    {nearestStores.map((store, index) => (
      <div className="nearby-card" key={index}>
        <div className="card-image-wrapper">
        <div className="card-image">
          <img src={store.image || "/assets/placeholder.png"} alt={store.name} />
        </div>
        </div>
        <p className="store-name">{store.name}</p>
      </div>
    ))}
  </div>
</div>


    </>
  );
};

  return (
    <div className="main">
      <h1>Bites, brunches & the best in town</h1>
      <p>Discover the best food spots recommended by locals</p>

      {/* Cuisine selection scroll */}
      <div className="eat-scroll-container">
        {canScrollLeft && (
          <button className="scroll-arrow left" onClick={() => scroll('left')}>‹</button>
        )}

        <div className="eat-links" ref={scrollRef}>
          <a href="#breakfast"><img src="/assets/breakfast.png" alt="Breakfast" /><p>Breakfast</p></a>
          <a href="#indian"><img src="/assets/indian.png" alt="Indian" /><p>Indian</p></a>
          <a href="#pubs"><img src="/assets/pubs.png" alt="Pubs" /><p>Pubs</p></a>
          <a href="#chinese"><img src="/assets/chinese.png" alt="Chinese" /><p>Chinese</p></a>
          <a href="#fast"><img src="/assets/fast.png" alt="Fast Food" /><p>Fast Food</p></a>
          <a href="#pizza"><img src="/assets/pizza.png" alt="Pizza" /><p>Pizza</p></a>
          <a href="#cafe"><img src="/assets/cafe.png" alt="Cafe" /><p>Cafe</p></a>
          <a href="#bbq"><img src="/assets/bbq.png" alt="BBQ" /><p>BBQ</p></a>
          <a href="#soul"><img src="/assets/soul.png" alt="Soul Food" /><p>Soul Food</p></a>
          <a href="#ice"><img src="/assets/ice.png" alt="Ice Cream" /><p>Ice Cream</p></a>
          <a href="#sea"><img src="/assets/sea.png" alt="Sea Food" /><p>Sea Food</p></a>
          <a href="#burger"><img src="/assets/burger.png" alt="Burger" /><p>Burger</p></a>
          <a href="#bubble"><img src="/assets/bubble.png" alt="Bubble Tea" /><p>Bubble Tea</p></a>
          <a href="#dessert"><img src="/assets/dessert.png" alt="Dessert" /><p>Dessert</p></a>
        </div>

        {canScrollRight && (
          <button className="scroll-arrow right" onClick={() => scroll('right')}>›</button>
        )}

        <div className="fade-left" />
        <div className="fade-right" />
      </div>

      {/* Eat sections */}
      <section id="near-you" className="eat-section">
        <h2>Near You</h2>
        <p>Just a short walk away from you.</p>
        <NearYou />
      </section>

      <section id="quick-bites" className="eat-section">
        <h2>Quick Bites</h2>
        <p>Perfect picks for when you're short on time.</p>
      </section>

      <section id="most-reviewed" className="eat-section">
        <h2>Most Reviewed</h2>
        <p>Highly rated crowd favourites.</p>
      </section>

      <section id="convenience" className="eat-section">
        <h2>Convenience Stores</h2>
        <p>Snack, drink, or daily essentials anytime.</p>
      </section>

      <section id="healthy-options" className="eat-section">
        <h2>Healthy Options</h2>
        <p>Fresh, balanced, and nourishing.</p>
      </section>

      <section id="all-stores" className="eat-section">
        <h2>All Stores</h2>
        <p>Browse every listed food and drink spot in Cambridge.</p>
      </section>
    </div>
  );
};

export default Eat;