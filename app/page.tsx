'use client'

import Image from "next/image";
import ProductCard from "./components/ProductCard";
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  imagePath: string;
  name: string;
  price: number;
  active: boolean;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Product[]>('https://be.givelink.app/data');
        
        if (Array.isArray(response.data))
          setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <main>
      <div className='body'>
        <div className='product-list'>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
