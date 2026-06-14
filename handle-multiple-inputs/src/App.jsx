import { useState } from 'react';
import './App.css';

const App = () => {
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value, age } = e.target;

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />

        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />

        <br />
        <br />

        <input
          type="number"
          name="age"
          value={formdata.age}
          onChange={handleChange}
          placeholder="Enter age"
          min="18"
          max="60"
          onWheel={(e) => e.target.blur()}
          style={{ width: '20%', padding: '8px', boxSizing: 'border-box' }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
