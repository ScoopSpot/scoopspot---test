import React from 'react';
import VendorCard from './components/VendorCard';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Welcome to ScoopSpot</h1>
      <VendorCard name="Magic Ice" location="DY5" rating={4.8} />
    </div>
  );
}

export default App;