
// Server Side Rendering Component
import React from 'react'
import AddToCard from './AddToCard'
import styles from './ProductCard.module.css'

interface Product
{
  imagePath: string,
  name: string,
  price: number,
  active: boolean

}


const ProductCard = ({product} : {product : Product}) => {
  return (
    <div className={styles.card}>


        <AddToCard></AddToCard>
    </div>
  )
}

export default ProductCard
 