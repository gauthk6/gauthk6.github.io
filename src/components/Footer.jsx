import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--cream-dark)',
      color: 'var(--gray-warm-700)',
      padding: '48px 24px',
      textAlign: 'center'
    }}>
      <p style={{
        fontSize: '0.875rem',
        margin: 0,
        fontFamily: 'var(--font-body)'
      }}>
        © {currentYear} Gautham Kishore
      </p>
    </footer>
  );
};

export default Footer;
