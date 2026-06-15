import { useEffect, useState } from 'react';

const App = () => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim()) {
        console.log('calling API for : ', search);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <div>
      <input
        value={search}
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default App;
