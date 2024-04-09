import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Tooltip Component
function Tooltip({ children }) {
  return (
    <div>
      <h3>My Custom Tooltip</h3>
      {children}
    </div>
  );
}

// Map Component
function Map() {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const [tooltipElement, setTooltipElement] = useState(null);

  useEffect(() => {
    const map = L.map(mapContainerRef.current).setView([-41.2865, 174.7762], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Create a marker and popup
    const marker = L.marker([-41.2865, 174.7762]).addTo(map);
    const popupContent = document.createElement('div');
    marker.bindPopup(popupContent).openPopup();

    // Create a portal for the tooltip and update state
    setTooltipElement(ReactDOM.createPortal(<Tooltip>Windy Wellington</Tooltip>, popupContent));

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []);

  // The map container will fill the entire screen space
  return (
    <div ref={mapContainerRef} style={{ height: '100vh', width: '100vw' }}>
      {/* Render the tooltip portal */}
      {tooltipElement}
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
