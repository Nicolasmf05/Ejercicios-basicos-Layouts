import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ResponsiveGrid() {
  const sectionStyle = (imageUrl) => ({
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
  });

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <div style={sectionStyle('pexels-pixabay-33109.jpg')}>Mujer</div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <div style={sectionStyle('water-1330252_1280.jpg')}>Hombre</div>
        </div>
        <div className="col-12 col-lg-4 mb-3">
          <div style={sectionStyle('vista-panoramica-cascada-bosque-contra-cielo_1048944-27266960.avif')}>Niños</div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveGrid;
