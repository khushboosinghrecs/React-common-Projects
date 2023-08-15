import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  // Get the initial value from local storage if available
  const storedValue = localStorage.getItem(key);

  // Initialize the state with the stored value or the provided initial value
  const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : initialValue);

  // Save the value to local storage whenever it changes
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
}

export default useLocalStorage;