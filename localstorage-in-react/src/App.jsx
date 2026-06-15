import { useState } from 'react';

const SimpleStorage = () => {
  const [name, setName] = useState('');

  // 1. Function to Save Data when button is clicked
  const handleSave = () => {
    localStorage.setItem('myUser', name);
    alert('Data Saved to LocalStorage!');
  };

  // 2. Function to Clear Data when button is clicked
  const handleClear = () => {
    localStorage.removeItem('myUser');
    setName(''); // Clears the input box too
    alert('LocalStorage Cleared!');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h3>Simple LocalStorage PlayArea</h3>

      <input
        type="text"
        value={name}
        placeholder="Type your name..."
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSave}>Save to LocalStorage</button>
      <button onClick={handleClear} style={{ marginLeft: '10px' }}>
        Clear LocalStorage
      </button>
    </div>
  );
};

export default SimpleStorage;
