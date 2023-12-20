import React from 'react';

export default function Cart({ items }) {
  return (
    <div>
      <h1>Cart Page</h1>
      {items && items.length > 0 && items.map((ele, id) => (
        <h3 key={id}>{ele}</h3>
      ))}
    </div>
  );
}
