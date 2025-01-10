import React from 'react';
import ReactDOM from 'react-dom';
import ResponsiveGrid from './ResponsiveGrid';

function App() {
  return (
    <div>
      <header style={{ textAlign: 'center', padding: '20px', background: '#f8f9fa' }}>
        <h1>Catálogo Responsivo</h1>
      </header>
      <ResponsiveGrid />
    </div>
  );
}

export default App;
