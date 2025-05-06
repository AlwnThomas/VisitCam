import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
         <span style={styles.logoNormal}>Visit</span>
         <span style={styles.logoBold}>Cam</span>
      </div>
      <ul style={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Eat</a></li>
        <li><a href="#">Travel</a></li>
      </ul>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.1rem 2rem',
    backgroundColor: '#f9fafb',
  },
  logo: {
    fontSize: '1.2rem',
  },
  logoNormal: {
    fontWeight: 400,
    color: '#003366',
  },
  logoBold: {
    fontWeight: 800,
    marginLeft: '2px',
  },
  navLinks: {
    fontWeight: 500,
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
  },
};

export default Navbar;