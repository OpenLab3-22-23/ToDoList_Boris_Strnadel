import React, { useState } from 'react';

function OptionsPage() {
  const [selectedBackground, setSelectedBackground] = useState('default');

  const handleBackgroundChange = (e) => {
    setSelectedBackground(e.target.value);
  };

  return (
    <div>
      <h1>Options Page</h1>
      <label>
        Default background
        <input type="radio" name="background" value="default" checked={selectedBackground === 'default'} onChange={handleBackgroundChange} />
      </label>
      <label>
        Blue background
        <input type="radio" name="background" value="blue" checked={selectedBackground === 'blue'} onChange={handleBackgroundChange} />
      </label>
      <label>
        Green background
        <input type="radio" name="background" value="green" checked={selectedBackground === 'green'} onChange={handleBackgroundChange} />
      </label>
      <div style={{ backgroundColor: selectedBackground }}>
        This is the preview area
      </div>
    </div>
  );
}

export default OptionsPage;

