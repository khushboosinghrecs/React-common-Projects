import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Cart';

const ShoppingPage = ({ items }) => (
  <div>
    <h2>Shopping Page</h2>
    {items.length > 0 && (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  const handleItem = (e) => {
    e.preventDefault();
    if (itemName.trim() !== '') {
      setItems([...items, itemName]);
      setItemName('');
    } else {
      alert('Please enter an item name');
    }
  };

  return (
    <div>
      <form onSubmit={handleItem}>
        <input
          type="text"
          placeholder="Enter item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>

      <div>
        <Router>
          <Link to="/Cart">Go to Cart</Link>
          <Routes>
            <Route path="/" element={<ShoppingPage items={items} />} />
            <Route path="/Cart" element={<Cart items={items} />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export { ShoppingCart };
