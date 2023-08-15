import React from 'react';
import useLocalStorage from './useLocalStorage';

function User() {
  const [name, setName] = useLocalStorage('name', '');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      <p>Hello, {name || 'stranger'}!</p>
    </div>
  );
}

export default User;
