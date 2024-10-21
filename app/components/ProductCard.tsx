import React from 'react';
import Image from 'next/image';

interface Product {
  imagePath: string;
  name: string;
  price: number;
  active: boolean;
}

const ProductCard = ({product}: {product: Product}) => {
  return (
    <div className="product">
      {
        // Image at location : https://be.givelink.app/images/products/ + imagePath
      }
      <Image // Image Component (automatic resizes, format like webP)
        src={'https://be.givelink.app/images/products/' + product.imagePath}
        alt={product.name}
        width={300}
        height={300}
      />

      <div className="product-info">
        <p>{product.name}</p>
        <div className="price">
          <p>{product.price} €</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
