// MaterialControls.jsx
import React from 'react';

const MaterialControls = ({ setMaterialType }) => {
  return (
    <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 10 }}>
      <button onClick={() => setMaterialType('basic')}>Basic Material</button>
      <button onClick={() => setMaterialType('metallic')}>Metallic Material</button>
      <button onClick={() => setMaterialType('rough')}>Rough Material</button>
    </div>
  );
};

export default MaterialControls;
