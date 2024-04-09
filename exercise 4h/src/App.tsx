import React from 'react';
import Map from './Map';
import Tooltip from './Tooltip';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className="App">
      <Tooltip />
      <Map />
    </div>
  );
}

export default App;