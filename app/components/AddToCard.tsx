// Client Side Rendering Component
'use client';
import React from 'react';

const AddToCard = () => {
  return (
    <div>
      <button onClick={() => console.log('Product added to cart')}>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCard;
