import SvgComponent from './landing';
import React from 'react';


function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  console.log(isMobile);
  if (isMobile) {
    return (
      <div>
        <SvgComponent />
      </div>
    );
  }

  return (
    <>
      <div style={{ minHeight: '80vh', height: '100%', width: '100%' }}>
        In progress
      </div>
    </>
  );
}

export default App;