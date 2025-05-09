// /src/pages/Eat.tsx

import React, { useRef, useState, useEffect } from 'react';
import '../pages/Eat.css';

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
      const fullScroll = scrollAmount * 4; // 👈 scroll by 4 items
      el.scrollBy({
        left: direction === 'left' ? -fullScroll : fullScroll,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', checkScroll);
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="main">
      <h1>Bites, brunches & the best in town</h1>
      <p>Discover the best food spots recommended by locals</p>

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
    </div>
  );
};

export default Eat;
