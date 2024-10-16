'use client';

import ProductCard from './components/ProductCard';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { log } from 'console';

// Object type Product need to have this Struct
interface Product {
  imagePath: string;
  name: string;
  price: number;
  active: boolean;
}


function App() {
  // Array of Products => Initialised empty
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch Data from link : https://be.givelink.app/data' => Save data in Product Array
    async function fetchData() {
      try {
        // Waiting for response from API endpoint
        const response = await axios.get<Record<string, Product[]>>(
          'https://be.givelink.app/data',
        );
        console.log(response.data.products);
        
        // Set Array Product to the updated response
        setProducts(Object.values(response.data.products).filter((product) => product.active == true)); // => From the response.data get only object with key 'product'
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <main>
      <div className="body">
        <div className="container">
          <h1> Λίστα Αναγκών μας </h1>
          <div className="product-list">
            {
            products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))
            }
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
