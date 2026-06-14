import { useState } from 'react';

export function App() {
  const [role, setRole] = useState('');

  return (
    <>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="frontend">Frontend Developer</option>
        <option value="backend">Backend Developer</option>
        <option value="fullstack">Full Stack Developer</option>
      </select>

      <p>Selected role: {role}</p>
    </>
  );
}
