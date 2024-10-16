import React from 'react';

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
        <img
          src={'https://be.givelink.app/images/products/' + product.imagePath}
          alt={product.name}
        ></img>

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
